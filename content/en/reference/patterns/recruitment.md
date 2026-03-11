# Automating Recruitment Tasks

## What Claude Code Can Do

Recruitment involves many repetitive tasks: data entry, template creation, scheduling interviews. The approach depends on what tools you're using, so start by mapping out your workflow.

## Try This First

Ask Claude Code (or Claude.ai):

```
Here are the tasks I do every week for recruitment:
- (list your tasks)

Here are the tools I use:
- (list your tools: e.g., Slack, Google Calendar, Sheets, HRMOS, Lever, etc.)

Which of these could be automated?
```

Claude will help you figure out where to start.

## Common Patterns

| Goal | Approach |
|---|---|
| Email interview schedules to candidates | Google Calendar MCP + Gmail |
| Consolidate candidate info in Sheets | Google Sheets MCP |
| Collect post-interview feedback | Google Forms + Sheets MCP |
| Notify selection status via Slack | Slack MCP |
| Operate ATS (Applicant Tracking System) | Depends on the tool (see below) |

## About ATS Tools

If you're using HRMOS, Lever, Greenhouse, or similar:
- If the tool has a public API, Claude Code may be able to interact with it
- Search for "[tool name] API" or ask Claude Code: "Does [tool] have an API?"
- Even without an API, Playwright MCP can automate browser-based workflows

## Keywords for Research

- **Your ATS name + API** — Check if API integration is available
- **Google Workspace MCP** — Automate Calendar / Sheets / Gmail
- **Playwright MCP** — Browser automation (for tools without APIs)

## References

- [Google Workspace Guide](/en/reference/patterns/google-auth)
- [Slack Guide](/en/reference/patterns/slack-app)
- [Browser Automation Guide](/en/reference/patterns/browser-automation)
