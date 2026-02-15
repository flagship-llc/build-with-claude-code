# Slack App Creation Guide

When developing a Slack App, configuring it through the Slack admin dashboard can feel complex. Using a **manifest.json**, you can define all your app's settings in one file, greatly simplifying the setup process.

---

## What is manifest.json?

manifest.json is a file that defines your Slack App's configuration in JSON format. Instead of configuring bot name, permissions (scopes), event subscriptions, and more one by one in the admin dashboard, you can define everything in this single file.

**Benefits**:
- Avoid mistakes in the admin dashboard
- Share and review settings with your team
- Easily reproduce the environment
- Let Claude Code generate it just by describing your app's requirements

---

## Generating manifest.json with Claude Code

Simply describe the features your Slack App needs, and Claude Code will generate a manifest.json with the appropriate permissions and event settings.

**Sample prompt for Claude Code**:

```
Please create a manifest.json for creating my Slack app so the setup will be easy for me.

My app will:
- Listen for messages in channels the bot is added to
- Respond to slash commands (/ask)
- Post messages to channels
```

Claude Code will generate a manifest.json tailored to your requirements. For the prompt above, it would automatically configure the necessary scopes like `chat:write`, `channels:history`, and `commands`, along with event subscriptions.

---

## Creating a Slack App with manifest.json

### 1. Generate the manifest.json

Ask Claude Code with a prompt like this. Adjust the requirements to match your app.

```
Please create a manifest.json for creating my Slack app.

My app needs to:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]
```

### 2. Create the Slack App

1. Go to [Slack API: Your Apps](https://api.slack.com/apps)
2. Click **"Create New App"**
3. Select **"From a manifest"**
4. Choose your workspace
5. Paste the generated manifest.json content
6. Review and click **"Create"**

That's it! Your app is created with bot name, permissions, event subscriptions, and slash commands all pre-configured.

### 3. Get Your Tokens

After creating the app, obtain the following tokens and save them in your project's `.env.local`.

1. Go to **"OAuth & Permissions"** in the left menu and install to your workspace
2. Copy the **Bot User OAuth Token** (starts with `xoxb-`)
3. Go to **"Basic Information"** in the left menu and copy the **Signing Secret**

```
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
```

Make sure `.env.local` is included in `.gitignore`.

### 4. Implement Your App

Once the tokens are ready, ask Claude Code to implement the app.

**Sample prompt for Claude Code**:

```
Use Slack Bolt for JavaScript to implement this Slack app.
- Reply to messages when the /ask command is received
- Use SLACK_BOT_TOKEN and SLACK_SIGNING_SECRET environment variables
```

---

## Prompt Examples by App Pattern

### Pattern 1: Channel Notification Bot

Send notifications to a Slack channel when specific events occur (deploy complete, error detected, etc.).

```
Please create a manifest.json for my Slack app.
The app will post notifications to a specific channel when called via API.
It only needs to send messages, not read them.
```

### Pattern 2: Slash Command Bot

Respond to slash commands like `/ask` or `/status`.

```
Please create a manifest.json for my Slack app.
The app responds to these slash commands:
- /ask [question] - answers a question
- /status - shows system status
```

### Pattern 3: Message Response Bot

Listen for messages in channels and reply when triggered.

```
Please create a manifest.json for my Slack app.
The app listens for messages in channels it's added to and replies when mentioned.
It should also be able to react with emoji.
```

### Pattern Comparison

| Pattern | Required Scopes (example) | Event Subscriptions | Implementation Effort |
|---------|--------------------------|--------------------|-----------------------|
| Channel notification | `chat:write` | Not needed | Low |
| Slash command | `commands`, `chat:write` | Not needed | Low |
| Message response | `chat:write`, `channels:history`, `reactions:write` | `message.channels` | Medium |

---

## Development Tips

### Local Development with ngrok

Slack Apps send events via webhooks, so you need a publicly accessible URL during local development.

**Sample prompt for Claude Code**:

```
Show me how to use ngrok to make my local development server accessible from Slack.
I want to set it up for a Next.js app running on port 3000.
```

### Updating manifest.json

When adding new features to your app, update the manifest.json and paste it again in the **"App Manifest"** section of the Slack admin dashboard.

**Sample prompt for Claude Code**:

```
This is my current Slack app manifest.json: [paste content]
I want to add the ability to open a modal when users click a button.
Please update the manifest.json with the necessary scopes and features.
```
