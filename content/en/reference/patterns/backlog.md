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

## References

- [Backlog MCP Server (Nulab Official)](https://github.com/nulab/backlog-mcp-server)
- [Backlog API Documentation](https://developer.nulab.com/docs/backlog/)
