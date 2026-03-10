# Browser Automation & Test Automation

Four approaches for automating browser operations and testing with Claude Code.

---

## Which One Should You Start With?

| Your Situation | Recommendation |
|---|---|
| Want to try / Non-engineer | **Claude in Chrome** or **Cowork** |
| Claude Code set up | **Playwright MCP** |
| Need regular testing | **Playwright Test Agents** |

---

## Option 1: Claude in Chrome

Chrome extension. Claude assists while seeing your screen. Install and go — no setup needed.

- Review test procedures together visually
- Ask "Is this page displaying correctly?"
- Accessible for non-engineers

---

## Option 2: Cowork

Visit [claude.ai/cowork](https://claude.ai/cowork) for screen sharing with Claude. No installation needed.

- Give instructions like "click here on this screen"
- Show your workflow: "I do this every time. Can it be automated?"

---

## Option 3: Playwright MCP

Claude Code directly controls the browser. Best for automating repetitive tests.

### Setup

Add to `.mcp.json`:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp"]
    }
  }
}
```

Works immediately if Node.js is installed.

### Usage

```
"Open this URL, log in, and screenshot the order list"
"Fill this form with 10 test entries"
"Navigate product → cart → checkout, screenshot each step"
```

### Playwright CLI (Token-Efficient)

`@playwright/cli` uses shell commands instead of MCP. **~4x more token-efficient** (114k → 27k tokens/task).

```bash
npm install -g @playwright/cli
```

---

## Option 4: Playwright Test Agents

Microsoft's AI test agents covering the full cycle: planning → code generation → healing.

| Agent | Role | What It Does |
|---|---|---|
| **Planner** | Test Planning | Explores the app, generates test plan |
| **Generator** | Code Generation | Creates Playwright tests from the plan |
| **Healer** | Test Healing | Runs tests → auto-fixes failures → re-runs |

### Setup

```bash
npx playwright init-agents
```

---

## Before/After

| | Manual | Playwright + Claude Code |
|---|---|---|
| Test planning | Write by hand | Planner Agent auto-generates |
| Test code | Write by hand | Generator Agent auto-generates |
| Browser ops | Manual | Automated |
| Screenshots | Manual | Auto-captured per step |
| Test failures | Manual fix | Healer Agent auto-repairs |
| Reports | Manual | "Summarize results" → auto-generated |

---

## References

- [Playwright MCP (Microsoft Official)](https://github.com/microsoft/playwright-mcp)
- [Playwright CLI (Token-Efficient)](https://www.npmjs.com/package/@playwright/cli)
- [Playwright Test Agents](https://playwright.dev/docs/test-agents)
- [Playwright Official](https://playwright.dev/)
