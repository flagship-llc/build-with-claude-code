# Managing GitHub Issues with Claude Code

Claude Code can create, search, and update GitHub Issues directly.
Great for turning verbal instructions or vague requests into well-structured Issues.

---

## Option 1: gh CLI (Recommended)

GitHub's official command-line tool. Claude Code can use it directly.

### Setup

```bash
# Install (Mac)
brew install gh

# Authenticate
gh auth login

# Verify
gh --version
```

### Using with Claude Code

```
"Create a GitHub Issue: login page shows error when submitting empty fields"
"List all open issues in this repository"
"Add a comment to Issue #42"
"Show all issues labeled 'bug'"
```

Claude Code formats the content (title, body, labels), asks for confirmation, then creates the Issue.

---

## Option 2: GitHub MCP Server

GitHub's official MCP server. Supports more operations than gh CLI.

### Setup

Requires Docker. Add to `.mcp.json`:

```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}
```

Create a token at [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens).

### Comparison

| | gh CLI | GitHub MCP |
|---|---|---|
| Setup | Simple | Requires Docker |
| Scope | Issues, PRs, releases | Broader GitHub API |
| Recommendation | Start here | When gh CLI isn't enough |

---

## References

- [gh CLI Official](https://cli.github.com/)
- [gh CLI Installation](https://github.com/cli/cli#installation)
- [GitHub MCP Server](https://github.com/github/github-mcp-server)
- [GitHub MCP Practical Guide](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/)
