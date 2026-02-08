# Claude Pricing

An explanation of the plans available for using Claude Code and how usage works.

Official pricing page: https://claude.com/pricing

---

## Plan Comparison

| Plan | Monthly Cost | Key Features |
|------|--------------|--------------|
| **Pro** | $20/month | Sufficient usage for typical development work |
| **Max** | $100/month or $200/month | For large projects or intensive development |

### Pro Plan

- Full access to all Claude Code features
- Sufficient usage for normal development work
- Provided to workshop participants by the organizers

### Max Plan

- 5x or more usage compared to Pro plan
- Ideal for extended intensive development sessions
- Upgrade option when token limits are reached

---

## What is the 5-Hour Rolling Window?

Claude's usage limits are managed through a **5-hour rolling window**.

### How It Works

1. Your usage over the past 5 hours is calculated
2. When you reach the limit, you temporarily cannot use the service
3. As time passes, usage from 5+ hours ago "rolls off" and your limit recovers

### Example

```
10:00 - Heavy token usage
11:00 - Still near the limit
12:00 - Slight recovery
...
15:00 - Usage from 10:00 "rolls off" the window, significant recovery
```

### How to Check Your Usage

You can check your current usage in Claude's settings:

https://claude.ai/settings/usage

![Usage settings screen](/images/settings_usage.png)

- **Session usage**: Current usage percentage (%)
- **Reset time**: Displayed as "Resets at X:XX"

### What to Do When You Reach the Limit

1. **Wait until reset time**: Wait until the reset time shown on screen
2. **Break up your work**: Make smaller requests instead of large changes all at once
3. **Upgrade to Max Plan**: Significantly higher limits

---

## What Are Tokens?

Tokens are the "units" consumed in conversations with Claude.

### Token Estimates

| Content | Approximate Tokens |
|---------|-------------------|
| 1 Japanese character | ~1-2 tokens |
| 1 English word | ~1 token |
| 1 line of code | ~5-15 tokens |

### Cases That Consume Many Tokens

- Reading long files
- Generating large amounts of code
- Long conversations (context accumulates)

### Tips for Saving Tokens

- Instruct Claude to read only necessary files
- Reset with `/clear` when conversations get long
- Progress in stages rather than requesting large changes at once

---

## Workshop Operations

### Basic Policy

- **Claude Pro Plan** provided to all participants
- **Max Plan** upgrades available if limits are reached

### If You Reach the Limit

1. First, consult with a mentor
2. Upgrade to Max Plan if needed
3. If there's wait time, use it as time to think about your design

---

## Useful Tool: Claude Usage Tracker

If you want to visualize your usage, the Chrome extension "Claude Usage Tracker" is helpful.

https://github.com/hamed-elfayome/Claude-Usage-Tracker

- Check current usage in real-time
- Display time remaining until limit
- Graph view of usage history

---

## Summary

- Usage is managed through a **5-hour rolling window**
- Pro Plan is sufficient for typical development work
- Even if you reach the limit, it recovers after waiting a bit
- The workshop is set up so you can develop without worrying about limits
