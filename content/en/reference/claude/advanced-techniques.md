# Advanced Claude Techniques

Once you're comfortable with basics, try these features for even better Claude utilization.

---

## CLAUDE.md (Project Settings File)

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

## MCP Servers (External Service Integration)

Using **MCP (Model Context Protocol)**, Claude can integrate with external services.

### What is MCP?

A system to extend Claude's capabilities. For example:
- Read and write Slack messages
- Get Shopify product data
- Run database queries directly
- Manipulate the file system

### Setup

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

### Types of MCP Servers

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

### Common MCP Servers

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

### Shopify Dev MCP

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

### Shopify MCP (Data Provider)

An MCP server to access **real data** in your Shopify store. Requires authentication.

**Type**: Data Provider (access to actual products, inventory, orders)

**Use cases**:

For EC site operations:

```
List all products with inventory below 10
```

```
Show the top 10 selling products from last week
```

```
Update the price of "Summer T-shirt" to 2,980 yen
```

---

## Slack Integration

With the Slack MCP server configured, Claude can directly interact with Slack.

### What you can do

**Information gathering**:
```
Summarize today's messages in the #general channel
```

```
Check unread mentions from @Tanaka
```

**Creating posts**:
```
Post a weekly progress report to #dev-team with:
- Feature A implementation complete
- Feature B is in testing
```

**Analysis**:
```
Analyze the past week of inquiries in #support channel
and summarize the most common questions
```

### What you need

1. **Slack Bot Token**: Created in your Slack workspace
2. **Team ID**: Found in Slack settings
3. **Required permissions**: channels:read, chat:write, etc.

Ask your mentor for detailed setup instructions.

---

## Sub-Agents (Automatic Task Splitting)

Claude automatically splits complex tasks into smaller tasks and processes them in parallel. These are called **sub-agents**.

### When are they used?

- When searching/editing multiple files simultaneously
- When performing large refactoring
- When running tests in parallel

### Example

```
In all JavaScript files in the project,
replace var with let or const
```

Claude automatically launches:
1. An agent to find target files
2. Agents to modify each file
3. An agent to verify changes

and processes them efficiently.

### How to check

When sub-agents are running, you may see "Agent" displayed in the chat.
Since multiple processes run simultaneously, it may take longer to get results than for simple tasks.

---

## Agent Teams

**Agent Teams** is an advanced feature that builds on sub-agents. Users can create **teams of agents with defined roles** that work together collaboratively.

### Difference from Sub-Agents

| Feature | Sub-Agents | Agent Teams |
|---------|------------|-------------|
| Task splitting | Claude decides automatically | User defines roles |
| Specialization | General purpose | Role-specific (QA, frontend, etc.) |
| Coordination | Independent processing | Message exchange between agents |
| Configuration | Not required | Defined in CLAUDE.md etc. |

### Example Roles

With Agent Teams, you can define specialists such as:

- **QA Expert**: Test creation, quality checking
- **Frontend Lead**: UI/UX, React/Vue implementation
- **Backend Lead**: API, database, server processing
- **Security Lead**: Vulnerability checks, security reviews
- **Documentation Lead**: README, API specification writing

### Usage Example

```
Join this project as a QA team and
improve the test coverage
```

From a QA expert perspective, suggests testing strategies and creates test code.

### Current Status

Agent Teams is provided as an experimental feature. Basic sub-agent functionality is used automatically, but detailed team definition features will continue to evolve in the future.

Start by utilizing the automatic sub-agent splitting feature, and consider Agent Teams configuration as needed.
