# AI Chat Backend Implementation Guide

Based on your Discord SupportAI bot (https://gitlab.com/ssomar1607/SupportAI.git), here's how to create a web-based version for your Docusaurus wiki.

## Architecture Overview

```
┌─────────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│   Docusaurus Wiki   │────▶│  AI Chat Backend │────▶│    OpenAI API    │
│   (/chat iframe)    │◀────│  (Node.js/Python)│◀────│                  │
└─────────────────────┘     └──────────────────┘     └──────────────────┘
                                      │
                                      ▼
                            ┌──────────────────┐
                            │  Wiki Content    │
                            │  (JSON/Vector DB)│
                            └──────────────────┘
```

## Backend Structure (Inspired by your SupportAI)

```
ai-chat-backend/
├── src/
│   ├── app.js                 # Express/Fastify server
│   ├── routes/
│   │   ├── chat.js            # Chat endpoints
│   │   ├── auth.js            # Authentication
│   │   └── subscription.js    # Payment verification
│   ├── services/
│   │   ├── openai.js         # OpenAI integration
│   │   ├── indexer.js        # Wiki content indexing
│   │   ├── vectorStore.js    # Embeddings storage
│   │   └── contextBuilder.js # Build context from wiki
│   ├── middleware/
│   │   ├── auth.js           # Auth middleware
│   │   └── rateLimit.js      # Rate limiting
│   └── utils/
│       └── wikiParser.js     # Parse wiki content
├── data/
│   └── wiki-content.json      # Indexed wiki content
├── .env
├── package.json
└── README.md
```

## Key Components

### 1. Content Indexing (Using Gemini)
```javascript
// services/indexer.js
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

class WikiIndexer {
  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Use embedding model for vector search
    this.embeddingModel = this.genAI.getGenerativeModel({ model: "embedding-001" });
  }

  async indexWikiContent() {
    // Read all markdown files from wiki
    const wikiPath = '../Wiki/docs';
    const content = await this.readAllMarkdown(wikiPath);

    // Generate embeddings for each section
    const embeddings = await this.generateEmbeddings(content);

    // Store in vector database
    await this.storeEmbeddings(embeddings);
  }

  async generateEmbeddings(content) {
    // Generate embeddings using Gemini
    const result = await this.embeddingModel.embedContent(content);
    return result.embedding;
  }
}
```

### 2. Chat Handler (Using Gemini Pro)
```javascript
// routes/chat.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post('/chat', authMiddleware, async (req, res) => {
  const { message, conversationId, history = [] } = req.body;
  const userId = req.user.id;

  try {
    // Get relevant wiki context
    const context = await contextBuilder.getRelevantContext(message);

    // Build prompt with context
    const prompt = `
      You are an AI assistant for ExecutableItems wiki.
      Context from documentation:
      ${context}

      User question: ${message}

      Provide a helpful answer based on the documentation. Be specific and include examples when relevant.
    `;

    // Start chat with history
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Get AI response from Gemini
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();

    // Save conversation history
    await saveConversation(userId, conversationId, message, text);

    res.json({
      response: text,
      conversationId,
      history: [...history,
        { role: 'user', parts: message },
        { role: 'model', parts: text }
      ]
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Chat service unavailable' });
  }
});
```

### 3. Authentication & Subscription
```javascript
// middleware/auth.js
const checkSubscription = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  // Verify token and check subscription
  const user = await verifyToken(token);
  const hasAccess = await checkUserSubscription(user.id);

  if (!hasAccess) {
    return res.status(403).json({ error: 'Active subscription required' });
  }

  req.user = user;
  next();
};
```

### 4. Frontend Integration
```javascript
// In your chat app (separate from Docusaurus)
const ChatWidget = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const response = await fetch('https://api.your-domain.com/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: text,
        conversationId
      })
    });

    const data = await response.json();
    setMessages([...messages, { user: text, ai: data.response }]);
  };

  return (
    <div className="chat-widget">
      {/* Chat UI */}
    </div>
  );
};
```

## Environment Variables (.env)
```
# Google Gemini
GEMINI_API_KEY=AIza...

# Database
DATABASE_URL=postgresql://...

# Authentication
JWT_SECRET=...
AUTH0_DOMAIN=...
AUTH0_CLIENT_ID=...

# Payment/Subscription
STRIPE_SECRET_KEY=...
STRIPE_WEBHOOK_SECRET=...

# CORS
ALLOWED_ORIGINS=https://docs.score-plugins.com

# Rate Limiting
RATE_LIMIT_WINDOW=60000
RATE_LIMIT_MAX_REQUESTS=10
```

## Deployment Options

### Option 1: Vercel + Supabase
- Frontend: Vercel (Next.js app)
- Backend: Vercel Functions
- Database: Supabase (PostgreSQL + Vector)
- Cost: ~$20/month

### Option 2: Railway
- Full-stack deployment
- Built-in PostgreSQL
- Easy scaling
- Cost: ~$5-20/month

### Option 3: Self-hosted VPS
- Complete control
- Use Docker Compose
- Nginx reverse proxy
- Cost: ~$5-10/month

## Docker Compose Example
```yaml
version: '3.8'

services:
  backend:
    build: .
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=postgresql://...
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - postgres
      - redis

  postgres:
    image: pgvector/pgvector:pg15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=ai_chat
      - POSTGRES_PASSWORD=secret

  redis:
    image: redis:alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

## Integration with Docusaurus

Your Docusaurus `/chat` page is ready to embed the chat app:

```javascript
// The iframe in /chat page will load:
<iframe src="https://chat.your-domain.com?embed=true" />
```

## Next Steps

1. **Clone your SupportAI bot** and adapt it for web
2. **Set up the backend** using the structure above
3. **Deploy the backend** to your chosen platform
4. **Update the CHAT_APP_URL** in `/src/pages/chat.js`
5. **Configure authentication** (Auth0, Clerk, or custom)
6. **Set up payment processing** (Stripe, PayPal)
7. **Index your wiki content** into the vector database

## Security Considerations

- Use HTTPS everywhere
- Implement CORS properly
- Rate limit API endpoints
- Sanitize user inputs
- Encrypt sensitive data
- Regular security audits

## Cost Estimates

- Gemini API: **FREE** tier includes 60 queries/minute (more than enough for most use cases)
- Gemini Pro pricing after free tier: ~$0.00025-0.001 per 1K characters (much cheaper than GPT-4)
- Hosting: $5-20/month
- Database: $0-10/month
- Auth service: $0-25/month
- Total: ~$5-45/month (potentially FREE with low usage)

## Advantages of Using Gemini

1. **Generous Free Tier** - 60 requests per minute free
2. **Lower Cost** - Significantly cheaper than OpenAI
3. **Larger Context Window** - Gemini Pro supports up to 32K tokens
4. **Built-in Safety** - Automatic content filtering
5. **Multi-modal** - Can process images if needed (Gemini Pro Vision)

---

This structure is based on your Discord bot but adapted for web deployment. The main differences are:
1. HTTP endpoints instead of Discord commands
2. Web authentication instead of Discord auth
3. Browser-based UI instead of Discord messages
4. Session management for conversations