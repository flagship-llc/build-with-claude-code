# Claude Basics

Learn how to program with AI using Claude Code.

---

## What is Claude Code?

Claude Code is a VS Code extension that lets you program while chatting with Claude (AI).

**What you do**
- Tell Claude what you want to build in plain English
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
| 5-hour rolling | Usage over the last 5 hours | Gradually recovers after 5 hours |
| Weekly Quota | Weekly usage limit | Resets weekly |

### When Approaching Limits

- A warning appears on screen
- When the limit is reached, you need to wait
- **Switching to Max Plan**: Contact a mentor (company will cover the cost)

### Tips to Save Usage

- Don't continue unnecessarily long conversations
- Start new topics with `/compact` or a new chat
- Try small iterations rather than aiming for perfection at once

---

## Compact Feature (Context Compression)

As conversations with Claude get longer, it may slow down or forget earlier content.
This is **separate from the Quota (usage limit) issue**.

### What is Compact?

A feature that summarizes conversation history to reduce the data Claude processes.

### When to Use

- When conversations get long
- When you feel "Did it forget what I said earlier?"
- When starting new work

### How to Use

Type in the chat:

```
/compact
```

Starting a new chat is also effective.

---

## Claude Usage (Usage Monitoring App)

There's a Mac app to check your usage.

### Installation

1. Search for "**Claude Usage**" in the App Store
2. Install
3. Log in with your Anthropic account

### What You Can Check

- Current usage
- 5-hour rolling remaining
- Weekly Quota remaining

### Recommended Usage

Keep it in the menu bar so you can always check your usage.
It's reassuring to know "how much more you can use".

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
1. Use `/clear` to clear the chat, or start a new chat
2. **Simply explain** what you want to do again
3. Restart from minimum functionality

It might seem like a detour, but it's often faster in the end.

---

## Common Operations

### Start a New Chat

The "**+**" button at the top of the chat panel, or:

```
/clear
```

Use this when starting a new topic.

### Compress Context

```
/compact
```

Use when conversations get long.

### View Help

```
/help
```

Shows a list of available commands.

### Undo Last Change

When you want to revert Claude's changes:

```
Undo the last change
```

Or use the "Undo" button next to Claude's response.

---

## File Operation Examples

### Create a New File

```
Create a file called hello.py with a program that prints Hello World
```

### Edit an Existing File

```
Edit hello.py to accept name input
```

### Check File Contents

```
Show me the contents of hello.py
```

### Run a File

```
Run hello.py
```

→ When asked for permission to run, select Allow.

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

#### Common MCP Servers

| MCP | Purpose | Use Cases |
|-----|---------|-----------|
| Slack | Slack integration | Post messages, get channel info |
| Shopify | EC operations support | Get product data, check inventory, manage orders |
| Filesystem | File operations | Access files outside specific folders |
| PostgreSQL | DB operations | Retrieve/update data |

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
