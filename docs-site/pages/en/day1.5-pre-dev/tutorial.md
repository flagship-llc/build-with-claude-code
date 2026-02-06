# Tutorial: Build a Meeting Summary Tool

In this tutorial, you'll build a tool that automatically summarizes meeting notes, together with Claude Code.

---

## Final Result

```
$ python summarize.py meeting.txt

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
2. Claude Code can be launched

---

## Step 1: Create Project Folder

Open Terminal and run:

```bash
mkdir -p ~/projects/minutes-summary
cd ~/projects/minutes-summary
code .
```

When VS Code opens, open the terminal (`Ctrl + ``).

---

## Step 2: Launch Claude Code

```bash
claude
```

A conversation with Claude begins.

---

## Step 3: Create Sample Meeting Notes

First, let's have Claude create a test meeting notes file.

### Tell Claude

```
Create a sample meeting notes file.
Name it meeting.txt and include:
- Date and participants
- Discussion topics (about 3 items)
- Decisions made
- Tasks for next time (with assignee and deadline)

Make it look like a realistic meeting in English.
```

### Verify

`meeting.txt` will be created. Let's check the contents:

```
Show me the contents of meeting.txt
```

---

## Step 4: Create Summary Script

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

### Note

We'll start simple with a script that just analyzes and extracts text structure.
You can expand it to AI-powered summarization later.

---

## Step 5: Run It

### Tell Claude

```
Run summarize.py with meeting.txt
```

### Check Results

The summary will be displayed. If it doesn't work well, don't worry - ask Claude to fix it:

```
The [specific part] part isn't being extracted correctly. Fix it
```

---

## Step 6: Improve

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

## Step 7: Reflect

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

Check current directory:
```
Which folder am I in?
```

Move to correct folder:
```
Run cd ~/projects/minutes-summary
```

### Japanese Text is Garbled

```
Unify the character encoding to UTF-8
```

### Can't Extract as Expected

Check the meeting notes format and adjust the script:
```
Analyze the structure of meeting.txt and modify to extract more accurately
```

---

## Checklist

- [ ] Created meeting.txt (sample meeting notes)
- [ ] Created summarize.py
- [ ] Ran it and summary was displayed
- [ ] Added at least one improvement

---

## Next Steps

Once the tutorial is complete, think about **your own ideas**.

- A tool to auto-generate daily reports
- A tool to draft emails
- A tool to format CSV data

At the camp day, you'll work on what you really want to build!
