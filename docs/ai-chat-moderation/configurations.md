# 📃 Configurations

### Features

* Advanced AI Detection: Identifies 12 categories of harmful content including harassment, hate speech, threats, violence, and inappropriate sexual content FOR all languages.
* Customizable Confidence Levels: Fine-tune detection sensitivity for each category
* Flexible Response System: Configure unique responses for different violation types
* Real-time Moderation: Option to check messages before or after they're sent
* Comprehensive Logging: Track flagged messages in your server console
* Easy Configuration: Simple YAML file with detailed options

### Installation

Just drag and drop the plugin jar into your plugins folder and it is ready ! No need to create an OpenAI or MistralAI key. To not to leave any doubt, message may be cached in my programs for performance purpose only.

### How It Works

The plugin analyzes each chat message using AI technology to determine if it contains harmful content. When potentially harmful content is detected, the plugin can:

* Hide the message from other players
* Send warning messages to the offending player
* Execute custom commands based on the violation type
* Kick or take other administrative actions for severe violations

Give your moderators the tools they need to maintain a positive community without constantly monitoring chat. AI Chat Moderation works silently in the background, allowing you to focus on building and playing while keeping your server safe for everyone.

### Configuration File

```yaml
# Enable or disable the plugin
enabled: true

# ---- NO AI PART ----
# To blacklist some words without using AI
blacklisted-words:
  - fuck you
  - retarded
# Whether or not the message will be hidden when it contains a blacklisted word
blacklisted-words-hide-message: true
# The commands to run if the message contains a blacklisted word
blacklisted-words-commands:
  - "SEND_MESSAGE &6%player% &cUse a correct language."

# ---- AI PART ----
# Choose your provider OPENAI or MISTRAL
# + Mistral is better for arabic and Russian languages
# + OpenAI responses are faster
provider: OPENAI
# True: the plugin will log the flagged messages in the console
# False: the plugin will not log the flagged messages in the console
logs-flagged-messages: true
# True: the plugin will check the message before it is sent (the message will be a bit delayed, approximately 0.3s)
# False: the plugin will check the message after it has been sent (the message will not be delayed) but if the message is flagged, the message will not be deleted
check-after-message-has-been-sent: false
# The different harmful categories that the plugin can detect
categories:
  # OPENAI
  illicit/violent:
    # True: the plugin will detect the messages in this category
    # False: the plugin will not detect the messages in this category
    detection: true
    # The actions that the plugin will do when a message is detected in this category
    actions:
      warn:
        # Adjust the confidence level to detect the messages in this category
        # When it is higher the plugin will detect only the messages with height intensity of harmfulness
        # When it is lower the plugin will detect the messages with low intensity of harmfulness
        # From 0.0 to 1.0, 0.85 is a good value
        confidence: 0.80
        # Whether the plugin will hide the message from the player
        hideMessage: true
        # The commands that the plugin will execute when a message is detected in this category
        # Placeholders: %player%: the player who sent the message
        #               %player_uuid%: the UUID of the player who sent the message
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violent language."
      other:
        confidence: 0.95
        hideMessage: true
        commands:
          - "kick %player%"
  # OPENAI
  self-harm/instructions:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use self-harm instructions."
  # OPENAI
  harassment:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to harass other players."
  # OPENAI
  violence/graphic:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violence."
  # OPENAI
  illicit:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use illicit language."
  # OPENAI
  self-harm/intent:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use self-harm intent."
  # OPENAI
  hate/threatening:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use threatening language."
  # OPENAI
  sexual/minors:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use sexual language."
  # OPENAI
  harassment/threatening:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use threatening language."
  # OPENAI
  hate:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use hate language."
  # OPENAI
  self-harm:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use self-harm language."
  # OPENAI and MISTRAL
  sexual:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use sexual language."
  # OPENAI
  violence:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violent language."
  # MISTRAL
  # Content that expresses prejudice, hostility, or advocates discrimination against individuals or groups based on protected characteristics such as race, ethnicity, religion, gender, sexual orientation, or disability. This includes slurs, dehumanizing language, calls for exclusion or harm targeted at specific groups, and persistent harassment or bullying of individuals based on these characteristics.
  hate_and_discrimination:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use hate language."
  # MISTRAL
  # Content that describes, glorifies, incites, or threatens physical violence against individuals or groups. This includes graphic depictions of injury or death, explicit threats of harm, and instructions for carrying out violent acts. This category covers both targeted threats and general promotion or glorification of violence.
  violence_and_threats:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violent language."
  # MISTRAL
  # Content that promotes or provides instructions for illegal activities or extremely hazardous behaviors that pose a significant risk of physical harm, death, or legal consequences. This includes guidance on creating weapons or explosives, encouragement of extreme risk-taking behaviors, and promotion of non-violent crimes such as fraud, theft, or drug trafficking.
  dangerous_and_criminal_content:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violent language."
  # MISTRAL
  # Content that promotes, instructs, plans, or encourages deliberate self-injury, suicide, eating disorders, or other self-destructive behaviors. This includes detailed methods, glorification, statements of intent, dangerous challenges, and related slang terms
  selfharm:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use violent language."
  # MISTRAL
  # Content that contains or tries to elicit detailed or tailored medical advice
  health:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use tailored medical language."
  # MISTRAL
  # Content that contains or tries to elicit detailed or tailored financial advice.
  financial:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use financial language."
  # MISTRAL
  # Content that contains or tries to elicit detailed or tailored legal advice.
  law:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to use elicit detailed language."
  # MISTRAL
  # Content that requests, shares, or attempts to elicit personal identifying information such as full names, addresses, phone numbers, social security numbers, or financial account details.
  pii:
    detection: true
    actions:
      warn:
        confidence: 0.80
        hideMessage: true
        commands:
          - "SEND_MESSAGE &6%player% &cYou are not allowed to leak personal information."

```
