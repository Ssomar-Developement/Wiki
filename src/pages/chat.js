import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './chat.module.css';

export default function ChatPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Configuration - Update these when you have your chat app ready
  const CHAT_APP_URL = 'http://localhost:3025'; // Replace with your actual chat app URL when deployed
  const AUTH_CHECK_URL = null; // Optional: Add authentication check endpoint

  useEffect(() => {
    // Check if user has access (placeholder for authentication)
    checkUserAccess();
  }, []);

  const checkUserAccess = async () => {
    // For now, allow access to everyone
    // Later, you can implement actual authentication check
    setHasAccess(true);
    setIsLoading(false);

    /* Example authentication check:
    if (AUTH_CHECK_URL) {
      try {
        const response = await fetch(AUTH_CHECK_URL, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const data = await response.json();
        setHasAccess(data.hasAccess);
        setUserEmail(data.email);
      } catch (error) {
        console.error('Auth check failed:', error);
        setHasAccess(false);
      }
    } else {
      // No auth configured, allow access
      setHasAccess(true);
    }
    setIsLoading(false);
    */
  };

  const handleSubscribe = () => {
    // Redirect to subscription page or show modal
    window.location.href = '/subscribe';
  };

  if (isLoading) {
    return (
      <Layout title="AI Chat Assistant" description="Chat with our AI assistant about ExecutableItems">
        <div className={styles.container}>
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Loading chat...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!hasAccess) {
    return (
      <Layout title="AI Chat Assistant" description="Chat with our AI assistant about ExecutableItems">
        <div className={styles.container}>
          <div className={styles.accessDenied}>
            <h1>🤖 AI Chat Assistant</h1>
            <div className={styles.featureCard}>
              <h2>Premium Feature</h2>
              <p>Access our intelligent AI assistant that can answer all your questions about:</p>
              <ul>
                <li>✨ ExecutableItems configuration</li>
                <li>⚙️ Command usage and permissions</li>
                <li>🎯 Activators and conditions</li>
                <li>📝 Variables and placeholders</li>
                <li>🚀 Advanced features and troubleshooting</li>
              </ul>
              <p className={styles.ctaText}>
                Subscribe to unlock unlimited AI assistance and get instant answers to your questions!
              </p>
              <button
                className={styles.subscribeButton}
                onClick={handleSubscribe}>
                🔓 Unlock AI Chat - Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="AI Chat Assistant" description="Chat with our AI assistant about ExecutableItems">
      <div className={styles.container}>
        <div className={styles.chatHeader}>
          <h1>🤖 AI Chat Assistant</h1>
          <p>Ask anything about ExecutableItems, commands, configurations, and more!</p>
        </div>

        {/* Embed the external chat application */}
        <div className={styles.chatContainer}>
          <iframe
            src={`${CHAT_APP_URL}?embed=true&theme=light`}
            className={styles.chatIframe}
            title="AI Chat Assistant"
            allow="clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* Fallback content if iframe doesn't load */}
        <noscript>
          <div className={styles.noScript}>
            <p>JavaScript is required to use the AI Chat Assistant.</p>
          </div>
        </noscript>
      </div>
    </Layout>
  );
}