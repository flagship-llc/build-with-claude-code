# Using Backlog with Claude Code

Using the official Backlog MCP Server by Nulab, Claude Code can directly manage Backlog issues.

---

## Setup

### 1. Generate an API Key

Log in to Backlog → "Personal Settings" → "API" → generate an API key.

### 2. Configure MCP

Add to `.mcp.json`:

```json
{
  "mcpServers": {
    "backlog": {
      "command": "npx",
      "args": ["-y", "backlog-mcp-server"],
      "env": {
        "BACKLOG_DOMAIN": "your-space.backlog.com",
        "BACKLOG_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

Replace `your-space.backlog.com` with your Backlog space domain.

---

## Usage

```
"List open issues in the [project] project on Backlog"
"Create a new Backlog issue with this content"
"Summarize Backlog issue XXX-123"
"Show issues completed this week"
```

---

## Use Case Patterns

| Goal | Combination |
|---|---|
| Draft responses from past issues | Backlog (read) → Generate draft |
| Create tasks from meeting notes | Google Docs (read) → Backlog (write) |
| Auto-generate progress reports | Backlog (read) → Slack (write) |
| Organize and categorize issues | Backlog (read) → Update labels/priorities |

---

## Review Checklist

Never apply Claude Code's generated or updated content without reviewing it first.

| Check | What to verify |
|---|---|
| **Issue content** | Are the title, description, and assignee correct? |
| **Labels/Priority** | Does the classification follow your team's conventions? |
| **Progress reports** | Do the numbers and completion rates match reality? |
| **Bulk operations** | When updating multiple issues, are the targets correct? |

**Especially for auto-generated progress reports: always verify that Claude's numbers and statuses match the actual state.** Sharing auto-generated reports without review is workslop.

---

## References

- [Backlog MCP Server (Nulab Official)](https://github.com/nulab/backlog-mcp-server)
- [Backlog API Documentation](https://developer.nulab.com/docs/backlog/)
