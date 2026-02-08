# Tutorial: Build a Meeting Minutes Summary Tool

In this tutorial, you'll build a tool that automatically summarizes meeting notes, together with Claude Code.
No external service connections required, making it ideal for your first tutorial.

---

## Final Result

```
=== Meeting Summary ===
Date: February 10, 2024 14:00-15:00
Participants: John, Sarah, Mike

=== Decisions ===
1. New feature release on March 1st
2. Sarah is in charge

=== Action Items ===
- John: Create spec document by 2/15
- Mike: Prepare test environment
```

---

## Time Required

Approximately 30 minutes to 1 hour

---

## Prerequisites

1. Environment setup is complete (see [Environment Setup Guide](../day1-setup/environment-setup))
2. You can log in to Claude Code in VS Code

---

## Step 1: Create Project Folder

### Open Folder in VS Code

1. Launch VS Code
2. From the menu, select "File" → "Open Folder"
3. Create and open a new folder called `~/projects/minutes-summary`
   - Create the `projects` folder first if it doesn't exist

### Open Claude Code

1. Click the **Claude icon** in VS Code's left sidebar
2. The chat panel appears

You're ready to go!

---

## Step 2: Create Sample Meeting Notes

First, let's have Claude create a test meeting notes file.

### Tell Claude

Type the following in the chat panel and press Enter:

```
Create a sample meeting notes file.
Name it meeting.txt and include:
- Date and participants
- Discussion topics (about 3 items)
- Decisions made
- Tasks for next time (with assignee and deadline)

Make it look like a realistic meeting.
```

### Allow File Creation

When Claude shows "Creating meeting.txt", click **Allow**.

### Verify

Once the file is created, check its contents:

```
Show me the contents of meeting.txt
```

You should also see `meeting.txt` in VS Code's Explorer (left sidebar).

---

## Step 3: Create Summary Script

Create a Python script that reads and summarizes the meeting notes.

### Tell Claude

```
Create a Python script that reads meeting.txt and summarizes it.
Name the file summarize.py.

Include in the summary:
- Date and participants
- Decisions (bullet points)
- Action items (with assignee and deadline)

Keep it simple using text processing only, don't use the Claude API.
```

### Allow File Creation

Allow the creation of `summarize.py`.

### Note

We'll start simple with a script that just analyzes and extracts text structure.
You can expand it to AI-powered summarization later.

---

## Step 4: Run It

### Tell Claude

```
Run summarize.py with meeting.txt
```

### Allow Command Execution

When Claude tries to run a command like `python summarize.py meeting.txt`, click **Allow**.

### Check Results

The summary will be displayed. If it doesn't work well, don't worry - ask Claude to fix it:

```
The [specific part] isn't being extracted correctly. Fix it
```

---

## Step 5: Improve

Once the basics work, try adding features.

### Improvement 1: Change Output Format

```
Make the summary output in Markdown format
```

### Improvement 2: Support Multiple Files

```
Make it accept multiple files as arguments.
Example: python summarize.py meeting1.txt meeting2.txt
```

### Improvement 3: Save Results to File

```
Save the summary results to a file named summary_YYYYMMDD.md
```

### Improvement 4: Add Priority Levels

```
Add priority levels (High/Medium/Low) to decisions
```

---

## Step 6: Reflect

### What Worked Well

- What instructions were easy to understand
- Good points about Claude's output

### Areas for Improvement

- Instructions that didn't communicate well
- Behavior that differed from expectations

Taking notes on these will help you at the camp day.

---

## Advanced Challenges (If Time Permits)

### Add a Web UI

```
Add a web interface to this tool.
Make it so you paste meeting notes in a text area and click a button to display the summary.
Use HTML and JavaScript.
```

### Slack Integration

```
Add a feature to post the summary to Slack
```

---

## Troubleshooting

### "File not found" Error

Check the folder open in VS Code.
Is `meeting.txt` visible in the Explorer on the left sidebar?

If the wrong folder is open:
1. "File" → "Open Folder"
2. Select `~/projects/minutes-summary`

### Can't Extract as Expected

Check the meeting notes format and adjust the script:
```
Analyze the structure of meeting.txt and modify to extract more accurately
```

---

## Checklist

- [ ] Opened Claude Code's chat panel in VS Code
- [ ] Created meeting.txt (sample meeting notes)
- [ ] Created summarize.py
- [ ] Ran it and summary was displayed
- [ ] Added at least one improvement

---

## Next Steps

Once the tutorial is complete, try other tutorials:

- [Morning Notification Tool](./tutorial-morning) - Google Calendar and Slack integration
- [Excel Data Tool](./tutorial-excel) - Business data analysis

Or explore the [Sample Templates](./templates) for **your own ideas**.
