# Sample Project Templates

Ideas and starter prompts for various tools you can use during pre-development and on camp day.

Choose one that's close to your department or work, and build it together with Claude Code.

---

## How to Use

1. Choose what you want to build from below
2. Copy the "Starter Prompt" and paste it into Claude Code
3. Once it works, try the "Extension Ideas"

---

## Table of Contents

- [Sales](#sales)
- [Customer Support](#customer-support)
- [Marketing](#marketing)
- [Engineering](#engineering)
- [Shopify Development](#shopify-development)
- [Mirakl Development](#mirakl-development)
- [Corporate IT](#corporate-it)
- [Finance](#finance)
- [Accounting](#accounting)
- [Legal](#legal)
- [General Affairs](#general-affairs)
- [Personal](#personal)

---

## Sales

### Meeting Notes → Minutes Converter

**Overview**: Generate formatted minutes from bullet-point meeting notes

**Starter Prompt**:
```
Create a Python script that converts meeting notes to minutes.

Input: Bullet-point notes (text file)
Output: Minutes in the following format

---
# Meeting Minutes
Date: [today's date]
Attendees: [extract from notes]

## Agenda
## Decisions
## Action Items
## Notes
---

Usage: python meeting_to_minutes.py memo.txt
```

**Extension Ideas**:
- Output in Markdown/Word format
- Reference past meeting history by customer name
- Share via Slack/email

---

### Proposal Draft Generator

**Overview**: Auto-generate proposal outline from customer info and requirements

**Starter Prompt**:
```
Create a tool that generates proposal drafts. Use HTML/CSS/JavaScript.

Input form:
- Customer name
- Industry
- Challenges (multiple selection)
- Budget range
- Desired implementation timing

On submit, display proposal outline with this structure:
1. Executive Summary
2. Challenge Analysis
3. Proposed Solution
4. Implementation Schedule
5. Estimated Cost
6. Expected Benefits
```

**Extension Ideas**:
- Load past proposal templates
- PDF export
- Auto-generate competitor comparison table

---

### Quote Calculator

**Overview**: Auto-calculate quotes from product/service combinations

**Starter Prompt**:
```
Create a quote calculator. Use HTML/CSS/JavaScript.

Product master (define in JSON):
- Product A: $100
- Product B: $250
- Product C: $500
- Option 1: $50
- Option 2: $80

Features:
- Select products and enter quantities
- Auto-calculate subtotal, tax, and total
- Allow discount rate input
- Display in quote format
```

**Extension Ideas**:
- Manage product master in external file
- PDF export of quotes
- Save quote history

---

## Customer Support

### Inquiry Template Response Tool

**Overview**: Quickly search and generate response templates for common inquiries

**Starter Prompt**:
```
Create an inquiry response template tool. Use HTML/CSS/JavaScript.

Features:
- Category-based template management (Shipping/Returns/Product Inquiries/Technical Support)
- Keyword search
- Replace variables in templates (customer name, order number, etc.)
- One-click copy to clipboard

Manage templates in JSON.
```

**Extension Ideas**:
- Template add/edit functionality
- Usage frequency counter
- Multi-language support

---

### Inquiry Analysis Dashboard

**Overview**: Analyze inquiry data and visualize trends

**Starter Prompt**:
```
Create an inquiry analysis dashboard. Use HTML/CSS/JavaScript.

Drag and drop CSV file (date, category, priority, response time, satisfaction).

Display:
- Inquiries by category (bar chart)
- Daily/weekly inquiry trends
- Average response time
- Satisfaction trends
- Priority breakdown

OK to use Chart.js.
```

**Extension Ideas**:
- Time-of-day inquiry trends
- Performance by agent
- SLA achievement rate calculation

---

## Marketing

### Social Media Post Generator

**Overview**: Generate social media posts from long-form content

**Starter Prompt**:
```
Create a tool that generates social media posts. Use HTML/CSS/JavaScript.

Input:
- Original content (long text)
- Target platform (Twitter / Instagram / LinkedIn)

Output:
- Post text adjusted to each platform's character limit
- Hashtag suggestions
- Optimal posting time recommendations

Template-based is OK.
```

**Extension Ideas**:
- Image size guide display
- Post schedule management
- Generate multiple variations for A/B testing

---

### Campaign Performance Dashboard

**Overview**: Generate simple dashboard from CSV data

**Starter Prompt**:
```
Create a marketing dashboard. Use HTML/CSS/JavaScript.

Drag and drop CSV file (date, channel, cost, clicks, conversions).

Display:
- Cost and conversions by channel (bar chart)
- CPA calculation and display (cost ÷ conversions)
- Daily trend line chart

OK to use Chart.js.
```

**Extension Ideas**:
- Period filter
- Compare with targets
- PDF report export

---

## Engineering

### Code Review Checklist

**Overview**: Auto-generate review points based on PR content

**Starter Prompt**:
```
Create a tool that generates code review checklists.

Input:
- Type of changed files (Frontend/Backend/Infrastructure)
- Change scale (Small/Medium/Large)
- Change type (New feature/Bug fix/Refactoring)

Output:
Checklist based on change content:
- Security perspective
- Performance perspective
- Testing perspective
- Documentation perspective

Output in Markdown format.
```

**Extension Ideas**:
- Check items by language/framework
- Auto-analyze GitHub PR descriptions
- Learn from past review comments

---

### Incident Response Template Generator

**Overview**: Quickly generate incident report templates

**Starter Prompt**:
```
Create a tool that generates incident response reports.

Interactive input:
1. Date/time of occurrence
2. Detection method (Monitoring alert/User report/Internal discovery)
3. Scope of impact
4. Summary of incident
5. Response actions
6. Root cause
7. Prevention measures

After input, output formatted report.
```

**Extension Ideas**:
- Auto-determine severity
- Search past similar incidents
- Auto-post to Slack

---

## Shopify Development

### Theme Customization Diff Checker

**Overview**: Visualize changes in Shopify themes

**Starter Prompt**:
```
Create a tool that checks Shopify theme file differences.

Compare two folders (original theme and modified theme):
- List of changed files
- List of added files
- List of deleted files
- Number of changed lines per file

Output as report.

Usage: python theme_diff.py ./original ./modified
```

**Extension Ideas**:
- Liquid file syntax check
- Generate change summary
- Predict impact scope when updating

---

### Product Data Bulk Registration Formatter

**Overview**: Convert Excel data to Shopify CSV format

**Starter Prompt**:
```
Create a tool that converts product data to Shopify import format.

Input CSV:
- Product name, price, inventory, description, category, image URL

Output:
Convert to Shopify product CSV import format.
Auto-complete required fields and format properly.

Usage: python to_shopify_csv.py products.csv
```

**Extension Ideas**:
- Expand variants (size, color)
- Auto-generate SEO metadata
- Validate image URL availability

---

### Google Sheets → Shopify Auto Product Registration

**Overview**: Auto-register product data from Google Sheets to Shopify

**Starter Prompt**:
```
Create a tool that auto-registers products from Google Sheets to Shopify.

Features:
- Get product data via Google Sheets API
- Register/update products via Shopify Admin API
- Determine new/update/delete
- Log processing results

Manage in config file (JSON):
- Google Sheets spreadsheet ID
- Shopify store info and API key
- Column mapping

Usage: python sync_products.py
```

**Extension Ideas**:
- Scheduled execution (cron/GitHub Actions)
- Update only changes
- Slack notification for results
- Image upload support

---

## Corporate IT

### PC Inventory Checklist

**Overview**: Generate inventory check sheets for devices

**Starter Prompt**:
```
Create a tool that generates PC inventory check sheets.

Input: Device list CSV (asset number, model, user, department)

Output:
- Check sheet organized by department (PDF or HTML)
- Each device has checkboxes for:
  - Physical verification
  - Serial number match
  - OS version
  - Security software active
  - Notes
```

**Extension Ideas**:
- Search devices by QR code
- Show differences from last inventory
- Result aggregation report

---

### Account Inventory Reminder

**Overview**: Manage periodic SaaS account inventories

**Starter Prompt**:
```
Create a SaaS account inventory management tool.

Input: Service list (service name, admin, last inventory date, inventory cycle)

Features:
- Auto-calculate next inventory date
- List services with approaching deadlines
- Record inventory completion

Use HTML/CSS/JavaScript + LocalStorage.
```

**Extension Ideas**:
- Email/Slack reminders
- Track account count trends
- Integration with cost management

---

## Finance

### Budget vs Actual Report Generator

**Overview**: Auto-generate variance analysis reports

**Starter Prompt**:
```
Create a tool that generates budget vs actual reports.

Input CSV:
- Account item, budget, actual

Output:
- Variance (actual - budget)
- Achievement rate (actual / budget × 100)
- Highlight items with large variances
- Visualization with graphs

Output report in HTML format.
```

**Extension Ideas**:
- Monthly trend display
- Year-over-year comparison
- Department-level aggregation

---

### Cash Flow Forecast Tool

**Overview**: Predict cash flow from incoming/outgoing schedules

**Starter Prompt**:
```
Create a cash flow forecast tool.

Input:
- Current balance
- Incoming schedule (date, amount, client)
- Outgoing schedule (date, amount, vendor)

Output:
- Daily balance trend graph
- Alert for days when balance falls below threshold
- Weekly/monthly summary

Use HTML/CSS/JavaScript.
```

**Extension Ideas**:
- Predict incoming from historical data
- Compare multiple scenarios
- Management by bank account

---

## Accounting

### Expense Report Checker

**Overview**: Check for missing entries and calculation errors in expense reports

**Starter Prompt**:
```
Create a tool that checks expense reports.

Input CSV: date, description, amount, category, receipt available

Checks:
- Date validity (future dates are errors)
- Total matches claimed amount
- Warning for required receipt categories (entertainment, etc.) without receipt
- Category validity (matching with description)

Display errors and warnings as a list.
```

**Extension Ideas**:
- Auto-suggest categories
- Compare with past similar claims
- Integration with approval workflow

---

### Journal Entry Conversion Tool

**Overview**: Generate journal entries from bank statements

**Starter Prompt**:
```
Create a tool that generates journal entries from bank statements.

Input: Bank statement CSV (date, description, deposit, withdrawal, balance)

Conversion rules (JSON):
- Keyword "Transfer ABC Corp" → Accounts receivable collection
- Keyword "Electric bill" → Utilities expense

Output: Journal CSV (date, debit account, debit amount, credit account, credit amount, description)
```

**Extension Ideas**:
- Learning function (auto-determine from past entries)
- Support for compound entries
- Output formats for different accounting software

---

## Legal

### Contract Review Checklist

**Overview**: Generate review points based on contract type

**Starter Prompt**:
```
Create a tool that generates contract review checklists.

Input:
- Contract type (NDA/Service Agreement/Sales/License)
- Our position (Buyer/Seller)
- Transaction amount scale

Output:
Checklist of items to verify for that contract:
- Required verification items
- Clauses requiring attention
- Negotiation points

Output in Markdown format.
```

**Extension Ideas**:
- Past revision history database
- Auto-determine risk level
- Diff check against standard clauses

---

### Contract Renewal Management Tool

**Overview**: Manage contract renewal deadlines and alerts

**Starter Prompt**:
```
Create a contract renewal management tool.

Input: Contract list (contract name, counterparty, start date, end date, auto-renewal, notice period)

Features:
- List contracts with approaching deadlines (30/60/90 days)
- Calculate and display notice deadlines
- Record renewal/termination

Use HTML/CSS/JavaScript + LocalStorage.
```

**Extension Ideas**:
- Calendar view
- Email/Slack reminders
- Link to contract PDFs

---

## General Affairs

### Office Supply Inventory Tool

**Overview**: Manage office supply inventory and orders

**Starter Prompt**:
```
Create an office supply inventory tool.

Features:
- Register supplies (name, category, quantity, reorder point, order unit)
- Record inventory changes
- Alert for supplies below reorder point
- Display inventory list

Use HTML/CSS/JavaScript + LocalStorage.
```

**Extension Ideas**:
- Auto-generate purchase orders
- Record usage history
- Monthly consumption report

---

### Meeting Room Booking Dashboard

**Overview**: Visualize meeting room utilization

**Starter Prompt**:
```
Create a dashboard that visualizes meeting room booking status.

Input: Booking data CSV (date, time, room name, booker, purpose)

Display:
- Utilization rate by room (bar chart)
- Congestion by time slot (heatmap)
- Today's booking list

Use HTML/CSS/JavaScript + Chart.js.
```

**Extension Ideas**:
- Search available rooms
- Analyze recurring bookings
- Check for double bookings

---

## Personal

### Reading Notes Organizer

**Overview**: Organize and summarize reading notes

**Starter Prompt**:
```
Create a tool that organizes reading notes.

Input: Bullet-point notes (text file)

Output:
- Book info (title, author)
- Key points (3-5 items)
- Memorable quotes
- Personal action items

Output in Markdown format.
```

**Extension Ideas**:
- Reading list management
- Tagging and search
- Export to Notion

---

### Budget Analysis Dashboard

**Overview**: Visualize personal budget data

**Starter Prompt**:
```
Create a budget analysis dashboard.

Input: Budget CSV (date, category, amount, memo)

Display:
- Spending by category (pie chart)
- Monthly spending trends (line chart)
- Comparison with budget
- Month-over-month changes

Use HTML/CSS/JavaScript + Chart.js.
```

**Extension Ideas**:
- Budget setting and over-budget alerts
- Fixed/variable expense classification
- Annual summary

---

### Habit Tracker

**Overview**: Track and visualize daily habits

**Starter Prompt**:
```
Create a habit tracker.

Features:
- Register habits (name, target frequency)
- Daily completion check
- Display streak count
- Monthly calendar view

Use HTML/CSS/JavaScript + LocalStorage.
```

**Extension Ideas**:
- Achievement rate graphs
- Reminder notifications
- Achievement badges

---

### Personal Task Manager (with Pomodoro)

**Overview**: Integrated task management and Pomodoro timer

**Starter Prompt**:
```
Create a task manager with Pomodoro timer.

Features:
- Add/complete/delete tasks
- Pomodoro timer (25 min work + 5 min break)
- Record Pomodoros per task
- Today's completed tasks list

Use HTML/CSS/JavaScript. Add sound notifications.
```

**Extension Ideas**:
- Weekly/monthly aggregation
- Compare with estimated time
- Focus mode (notification blocking)

---

## Tips for Choosing

1. **Choose something useful for your work** - It increases motivation
2. **Start simple** - Add features gradually
3. **It's OK if it doesn't work** - Tell Claude "I got an error" and it will fix it

---

## Looking Ahead to Camp Day

These templates are for practice.

On camp day, you'll work on **challenges you truly want to solve**.

Getting a feel for "instructing AI to write code" during pre-development will make camp day development go smoothly.
