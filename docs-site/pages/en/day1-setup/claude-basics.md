# Claude Basics

Learn how to program with AI using Claude Code.

---

## What is Claude Code?

Claude Code is a VS Code extension that lets you program while chatting with Claude (AI).

### Two Interfaces

Claude Code can be used in two ways:

| Interface | Description | Features |
|-----------|-------------|----------|
| **Chat UI** (VS Code extension) | Chat in VS Code sidebar | Beginner-friendly, intuitive |
| **Terminal** | Command line interaction | For advanced users, faster |

This workshop primarily uses the **Chat UI**.

![VS Code UI](/images/vscode-ui.png)

- Center Claude icon: Opens the terminal
- Bottom-right icon: Opens the Claude Code chat UI

**How to launch in Terminal** (for reference):
```bash
claude
```
Type `claude` in Terminal to start Claude Code.

**Note**: Slash commands like `/compact` and `/clear` are **only available in Terminal**. In the Chat UI, use the "+" button to start a new chat.

---

**What you do**
- Tell Claude what you want to build in natural language
- Review what's been created
- Request modifications or additions

**What Claude does**
- Write code
- Create and edit files
- Fix errors
- Explain things you don't understand

---

## Basic Flow

### 1. Open Claude Code

1. Open a project folder in VS Code
2. Click the **Claude icon** in the left sidebar
3. The chat panel appears

### 2. Tell Claude What You Want to Build

Type in the chat field and press Enter:

```
Create a program that displays today's date
```

### 3. Claude Works

Claude writes code and creates files.
You can see what it's doing on screen.

### 4. Review and Request Changes if Needed

```
Also display the time
Change the format to YYYY-MM-DD
```

---

## Approval (Permission) Decisions

When Claude creates/edits files or runs commands, **it asks for your permission**.

### Operations Requiring Permission

- Creating/editing files
- Running commands (like executing programs)
- Deleting files

### Decision Points

| Display | Decision |
|---------|----------|
| File name/content to create looks reasonable | **Allow** |
| Command to run is understandable | **Allow** |
| Not sure | **Deny** first and ask questions |

### When in Doubt

```
What does this command do?
```

Just ask before deciding. Even if you make a mistake, you can fix it later.

### Bulk Approval Options

If approving the same type of operation repeatedly gets tedious, options like "Allow for this session" let you auto-approve during the session.

---

## Usage Limits

Claude Code has usage limits. When you hit the limit, it becomes temporarily unavailable.

### Types of Limits

| Limit | Description | Reset |
|-------|-------------|-------|
| 5-hour session | Usage from when you start | Resets after 5 hours |
| Weekly Quota | Weekly usage limit | 7-day rolling window |

### When Approaching Limits

- A warning appears on screen
- When the limit is reached, you need to wait until the specified reset time (displayed as "Resets today at ○○")
- **Switching to Max Plan**: Contact a mentor (company will cover the cost)

### Tips to Save Usage

- Don't continue unnecessarily long conversations
- Start new topics with a new chat ("+" button)
- Try small iterations rather than aiming for perfection at once

---

## When Conversations Get Long

As conversations with Claude get longer, it may slow down or forget earlier content.
This is **separate from the Quota (usage limit) issue**.

### How to Handle

**In Chat UI (VS Code)**:
- Click the "**+**" button to start a new chat

**In Terminal**:
- Use the `/compact` command to compress conversation history

### When to Start a New Chat

- When conversations get long
- When you feel "Did it forget what I said earlier?"
- When starting new work

---

## Tips for Effective Prompting

### Good Examples

```
"Create a tool that reads a CSV file and calculates total sales"
"Create a webpage that shows a message when a button is clicked"
"Fix this error"
"Explain what this code does"
```

### Better Examples (Be Specific)

```
"Create a Python script that reads a CSV file (column 1 is date, column 2 is product name,
column 3 is amount) and calculates the total of the amounts"
```

```
"Create a webpage with an input field and button. When clicked, it displays
'Hello, [name]!' using HTML and JavaScript."
```

### Key Points

1. **Clearly state what you want to build**
2. **Be specific about input/output**
3. **Mention technology preferences** if you have them (Python, JavaScript, etc.)

If you're not sure, just describe it roughly. Claude will ask clarifying questions.

---

## Useful Features

### @Mention to Reference Files

When asking about a specific file, use `@` to specify it.

```
@index.html look at this and change the button color to blue
```

```
@data.csv analyze this and tell me the sales trends
```

**How to use**:
1. Type `@` in the chat field
2. File name suggestions appear
3. Select and continue your message

Claude reads the file contents and responds appropriately.

---

### Show Images

You can show screenshots or design images to Claude.

**How to use**:
- **Drag and drop** images into the chat field
- Or **paste** (`Cmd + V`)

**Use cases**:

```
[Paste screenshot]
Explain what this error screen means
```

```
[Paste design image]
Create an HTML layout like this screen
```

```
[Paste hand-drawn sketch]
Implement this UI
```

---

### Select Code and Ask Questions

You can select code in VS Code and ask Claude directly about it.

**How to use**:
1. **Select** code in the VS Code editor (drag)
2. **Right-click** → "**Claude: Add to Chat**"
3. Selected code is added to chat
4. Enter your question

**Use cases**:

```
[Add selected code]
Explain what this part does
```

```
[Add selected code]
There seems to be a bug here. Check it
```

---

### Understanding the Entire Project

When starting work on a new project, it's effective to let Claude understand the big picture first.

```
Explain this project's structure
```

```
Tell me the tech stack used in this project
```

```
List the main files and their roles
```

Claude reads the folder structure and files to understand the project.

---

## Tips for Effective Progress

### Start Small, Add Gradually

Don't try to build something perfect at once. Start with the minimum.

**Good approach**:
```
1. First create a page that just displays "Hello World"
2. Then add an input form
3. Then make it display a greeting when the button is clicked
4. Then improve the design
```

**Approach to avoid**:
```
Create a page with an input form and button, that displays a greeting when clicked,
with nice design, validation, error handling, and responsive design...
```

Telling Claude everything at once makes it more likely to get confused.

---

### Reset When Things Aren't Working

When conversations get long or Claude seems confused, **starting over** is effective.

**Signs you need to reset**:
- Same error can't be fixed despite multiple attempts
- It forgot what you said earlier
- Suggestions keep getting more complex

**How to reset**:
1. Click the "**+**" button to start a new chat (in Terminal: `/clear`)
2. **Simply explain** what you want to do again
3. Restart from minimum functionality

It might seem like a detour, but it's often faster in the end.

---

## Common Operations

### Start a New Chat

Click the "**+**" button at the top of the chat panel.
Use this when starting a new topic.

### Undo Last Change

When you want to revert Claude's changes:

```
Undo the last change
```

Or use the "Undo" button next to Claude's response.

### Terminal Commands (Reference)

When using Claude Code in Terminal, these slash commands are available:

| Command | Description |
|---------|-------------|
| `/clear` | Clear the chat |
| `/compact` | Compress context (when conversations get long) |
| `/help` | Show command list |

**Note**: These commands are not available in the Chat UI.

---

## Advanced Features

Once you're comfortable with basics, try these features for even better Claude utilization.

### CLAUDE.md (Project Settings File)

Creating a `CLAUDE.md` file at your project root lets Claude automatically understand your project's rules and context.

**Example CLAUDE.md contents**:

```markdown
# Project Overview

This project is an internal expense management system.

## Tech Stack
- Frontend: React + TypeScript
- Backend: Python (FastAPI)
- Database: PostgreSQL

## Coding Standards
- Add Japanese comments explaining variable names
- Display error messages in Japanese
- Always write tests

## Notes
- Don't handle production data
- Store API keys in .env file
```

**Benefits**:
- No need to explain "this project is..." every time
- Generates code following project rules
- Entire team uses Claude with same settings

**Location and Usage**:

| Type | Location | Purpose |
|------|----------|---------|
| Project-specific | `project-folder/CLAUDE.md` | Rules specific to that project (tech stack, coding standards, directory structure, etc.) |
| Global | `~/.claude/CLAUDE.md` | Your personal preferences (commit message style, language settings, work style, etc.) |

Global settings apply to all projects. If project-specific settings exist, both are loaded.

---

### MCP Servers (External Service Integration)

Using **MCP (Model Context Protocol)**, Claude can integrate with external services.

#### What is MCP?

A system to extend Claude's capabilities. For example:
- Read and write Slack messages
- Get Shopify product data
- Run database queries directly
- Manipulate the file system

#### Setup

Add MCP servers in VS Code settings (`settings.json`).

**How to open settings file**:
1. Open command palette with `Cmd + Shift + P`
2. Select "Preferences: Open User Settings (JSON)"

**Example configuration (Slack MCP)**:

```json
{
  "claude.mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token-here",
        "SLACK_TEAM_ID": "T0123456789"
      }
    }
  }
}
```

#### Types of MCP Servers

MCP servers can be categorized into three types based on what they provide:

| Type | Description | Examples |
|------|-------------|----------|
| **Information/Docs Provider** | Provides API docs, schema info (reference only) | Shopify Dev MCP |
| **Data Provider** | Access to actual data (read/write) | GitHub, Shopify, Slack, PostgreSQL |
| **Tool/Action Provider** | Executes operations and processes | Playwright, Filesystem, Fetch |

**Example: Shopify-related MCPs**

| MCP | Type | Purpose |
|-----|------|---------|
| **Shopify Dev MCP** | Information Provider | API docs search, development reference (no auth required) |
| **Shopify MCP** | Data Provider | Access actual product, inventory, order data (auth required) |

#### Common MCP Servers

**Information/Docs Providers** (reference, often no auth required)

| MCP | Purpose | Use Cases |
|-----|---------|-----------|
| [Shopify Dev MCP](https://shopify.dev/docs/apps/build/devmcp) | Shopify development | API spec search, Polaris/Hydrogen/Functions |

**Data Providers** (real data access, auth required)

| MCP | Purpose | Use Cases |
|-----|---------|-----------|
| [GitHub](https://github.com/modelcontextprotocol/servers) | GitHub integration | Issue/PR management, code review |
| [Slack](https://github.com/anthropics/mcp-server-slack) | Slack integration | Post messages, get channel info |
| [Shopify](https://github.com/siddhantbajaj/shopify-mcp-server) | EC operations | Product data, inventory, orders |
| [Notion](https://github.com/anthropics/mcp-server-notion) | Notion integration | Page creation/editing, database ops |
| [Google Drive](https://github.com/anthropics/mcp-server-gdrive) | Drive integration | File search and retrieval |
| [PostgreSQL](https://github.com/modelcontextprotocol/servers) | DB operations | Data retrieval/update, SQL execution |
| [Memory](https://github.com/modelcontextprotocol/servers) | Knowledge graph | Persistent storage, related info recall |

**Tool/Action Providers** (execute operations)

| MCP | Purpose | Use Cases |
|-----|---------|-----------|
| [Playwright](https://github.com/anthropics/mcp-server-playwright) | Browser automation | E2E testing, UI automation |
| [Filesystem](https://github.com/modelcontextprotocol/servers) | File operations | Access files outside specific folders |
| [Git](https://github.com/modelcontextprotocol/servers) | Git repository ops | Commit history search, diff viewing |
| [Fetch](https://github.com/modelcontextprotocol/servers) | Web fetching | Get content from URLs, API calls |
| [Time](https://github.com/modelcontextprotocol/servers) | Time/timezone | Time conversion, timezone calculations |
| [Sequential Thinking](https://github.com/modelcontextprotocol/servers) | Thinking support | Step-by-step complex problem solving |

For more, see [MCP Official Repository](https://github.com/modelcontextprotocol/servers) or [Awesome MCP Servers](https://mcp-awesome.com/).

#### Shopify Dev MCP

A helpful MCP server for Shopify app **development**. Runs locally without authentication.

**Type**: Information/Docs Provider (no access to real data)

**Features**:
- Search Shopify API documentation
- Explore Admin GraphQL API schema
- Get info on Polaris, Hydrogen, Storefront Web Components
- Shopify Functions development support

**Example configuration**:

```json
{
  "claude.mcpServers": {
    "shopify-dev": {
      "command": "npx",
      "args": ["-y", "@shopify/dev-mcp"]
    }
  }
}
```

#### Shopify MCP (Data Provider)

An MCP server to access **real data** in your Shopify store. Requires authentication.

**Type**: Data Provider (access to actual products, inventory, orders)

---

### Sub-Agents (Automatic Task Splitting)

Claude automatically splits complex tasks into smaller tasks and processes them in parallel. These are called **sub-agents**.

#### When are they used?

- When searching/editing multiple files simultaneously
- When performing large refactoring
- When running tests in parallel

#### Example

```
In all JavaScript files in the project,
replace var with let or const
```

→ Claude automatically launches:
1. An agent to find target files
2. Agents to modify each file
3. An agent to verify changes

and processes them efficiently.

#### How to check

When sub-agents are running, you may see "Agent" displayed in the chat.
Since multiple processes run simultaneously, it may take longer to get results than for simple tasks.

---

### Agent Teams

**Agent Teams** is an advanced feature that builds on sub-agents. Users can create **teams of agents with defined roles** that work together collaboratively.

#### Difference from Sub-Agents

| Feature | Sub-Agents | Agent Teams |
|---------|------------|-------------|
| Task splitting | Claude decides automatically | User defines roles |
| Specialization | General purpose | Role-specific (QA, frontend, etc.) |
| Coordination | Independent processing | Message exchange between agents |
| Configuration | Not required | Defined in CLAUDE.md etc. |

#### Example Roles

With Agent Teams, you can define specialists such as:

- **QA Expert**: Test creation, quality checking
- **Frontend Lead**: UI/UX, React/Vue implementation
- **Backend Lead**: API, database, server processing
- **Security Lead**: Vulnerability checks, security reviews
- **Documentation Lead**: README, API specification writing

#### Usage Example

```
Join this project as a QA team and
improve the test coverage
```

→ From a QA expert perspective, suggests testing strategies and creates test code.

#### Current Status

Agent Teams is provided as an experimental feature. Basic sub-agent functionality is used automatically, but detailed team definition features will continue to evolve in the future.

Start by utilizing the automatic sub-agent splitting feature, and consider Agent Teams configuration as needed.

---

## When You're Stuck

### When You Get an Error

Show the error message directly to Claude:

```
I got this error. Fix it
```

Claude reads the error message, explains the cause, and fixes it.

### When You Don't Know What to Ask

```
I want to do X, how should I do it?
What is X?
What should I do next in this project?
```

Don't hesitate to ask. Claude is good at explanations.

### When You Don't Understand Claude's Suggestion

```
Explain in more detail
Explain for a beginner
Why do it that way?
```

---

## Practice: First Steps

Once environment setup is done, try the following.

### Exercise 1: Simple Calculation

Open the `my-first-app` folder in VS Code and in the Claude panel:

```
Create a Python program that calculates the sum of 1 to 100, and run it
```

→ Claude creates and runs the file. Allow when asked for permission.

### Exercise 2: File Operations

```
Create a file called fruits.txt and write apple, banana, orange on separate lines
```

Then:

```
Create a program that reads fruits.txt and displays everything in uppercase
```

### Exercise 3: Web Page

```
Create a simple self-introduction page in HTML. Display name and hobbies
```

Then:

```
Open the HTML file I created in the browser
```

---

## Next Steps

Once you're comfortable with basic operations, try the [Meeting Summary Tool Tutorial](../day1.5-pre-dev/tutorial).

You'll build a tool you can actually use at work, together with Claude.
