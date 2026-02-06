# Tips for Participants

Tips for smooth development using Claude Code.

---

## Communication Tips

### 1. Start by Clearly Stating Your Goal

**Less effective**:
```
Create a file reading feature
```

**Better**:
```
I want to create a tool that reads a CSV file and calculates total sales.
Let's start with the file reading part.
```

When Claude understands the goal, it designs with the future in mind.

---

### 2. Include Specific Examples

**Less effective**:
```
Format the date nicely
```

**Better**:
```
Display the date in "Thursday, February 15, 2024" format
```

"Nicely" means different things to different people. Show a concrete example.

---

### 3. Ask for One Thing at a Time

**Less effective**:
```
Create all the features: file reading, data processing, graph display, and CSV export
```

**Better**:
```
First create the file reading feature. Once it works, let's add the next feature
```

Build small, verify it works, and proceed steadily.

---

### 4. Don't Hesitate to Say When It's Different from Expected

```
This isn't what I had in mind. Make it Y instead of X
```

```
Make it simpler. Minimal features are fine
```

```
I like this part, but change that part
```

Claude will revise as many times as needed. No need to hold back.

---

## Efficiency Tips

### 5. Paste Error Messages Directly

```
I got this error:
[paste error message directly]
Fix it
```

Error messages contain hints about the cause. Show them to Claude.

---

### 6. Use "Explain"

```
Explain what this code does
```

```
Why did you choose this method?
```

```
What other approaches are there?
```

Understanding before proceeding makes later modifications easier.

---

### 7. /clear Before a New Topic

```
/clear
```

When switching to a completely different topic, clearing history helps Claude stay focused.

---

### 8. When Stuck, Ask "What Should I Do?"

```
I want to do X, what should I do?
```

```
From where I am now, what should I do next?
```

When you consult Claude, it will show you the way.

---

## Useful Phrases

### Creating & Modifying

| What you want | Phrase |
|---------------|--------|
| Create a file | "Create a file called myfile.py" |
| Modify | "Change the X part to Y" |
| Add | "Add X feature" |
| Delete | "Delete the X part" |
| Undo | "Undo the last change" |

### Checking & Running

| What you want | Phrase |
|---------------|--------|
| View contents | "Show me the contents of myfile" |
| Execute | "Run myfile" |
| Verify | "Check if it works correctly" |

### Understanding & Consulting

| What you want | Phrase |
|---------------|--------|
| Ask for explanation | "Explain what this code does" |
| Ask for options | "What other methods are there?" |
| Ask for suggestions | "What do you think I should do?" |
| Simplify | "Can you make this simpler?" |

---

## Dealing with Getting Stuck

### Pattern 1: Getting Errors

1. Copy the error message
2. Paste it to Claude and say "Fix it"
3. If not fixed, "Try a different approach"

### Pattern 2: Not Working as Expected

1. Say "The X part is different from expected"
2. Be specific: "Expected: Y, Actual: Z"
3. Ask "Explain why it's doing that"

### Pattern 3: Don't Know What to Ask

1. "I want to do X, how should I proceed?"
2. Claude will suggest steps
3. Proceed one step at a time

### Pattern 4: Things Got Too Complex

1. `/clear` to clear history
2. "Build something simple that only does X"
3. Restart from minimal functionality

---

## When to Ask a Mentor

Don't hesitate to call a mentor in these cases:

- Claude keeps repeating the same error
- Don't know what to ask
- Unsure about direction
- Anxious about whether current approach is right

**Time spent struggling alone is wasted time!**
Raise your hand and call a mentor.

---

## Today's Goal

**You don't need to build something perfect.**

- First make something that works
- Build small, improve gradually
- Ask when you don't know

Enjoy the experience of "writing code together with AI"!
