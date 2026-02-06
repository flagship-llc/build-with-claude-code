# Troubleshooting Guide

Common problems and solutions compiled here.

---

## Claude Code Related

### Claude Code Won't Start

**Symptom**: No response or error when running `claude` command

**Solutions**:

1. Check if Node.js is installed
   ```bash
   node --version
   ```
   If not displayed: `brew install node`

2. Reinstall Claude Code
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

3. Restart Terminal

---

### Authentication Error

**Symptom**: "Authentication required", "Please log in", etc.

**Solutions**:

1. Run authentication again
   ```bash
   claude
   ```
   Browser opens, log in again

2. If that doesn't work, clear cache
   ```bash
   rm -rf ~/.claude
   claude
   ```

3. Consult a mentor

---

### Response is Slow or Stops

**Symptom**: Claude's response never comes back

**Solutions**:

1. Interrupt with `Ctrl + C`
2. Send the same instruction again
3. If frequent, `/clear` then retry

---

### Hit Token Limit

**Symptom**: "Limit reached" message, etc.

**Solutions**:

1. **Switch to Max Plan**: Ask a mentor (company will cover the cost)
2. Temporary fix: `/clear` clears history and gives some headroom

---

## Code Execution Related

### "File not found"

**Symptom**: FileNotFoundError, No such file or directory

**Solutions**:

1. Check current directory
   ```
   Which folder am I in?
   ```

2. Check if file exists
   ```
   Show me the file list with ls
   ```

3. Specify correct path and run again

---

### "Permission denied"

**Symptom**: Permission denied

**Solutions**:

1. Grant execute permission
   ```
   Give the script execute permission with chmod +x
   ```

2. If that doesn't work
   ```
   Run it directly with python
   Example: python script.py
   ```

---

### Text is Garbled

**Symptom**: Garbled characters, □□□, ????

**Solutions**:

1. Ask Claude
   ```
   Unify the character encoding to UTF-8
   ```

2. Specify encoding when reading files
   ```
   Specify encoding='utf-8' when reading the file
   ```

---

### Module Not Found

**Symptom**: ModuleNotFoundError, No module named 'xxx'

**Solutions**:

1. Ask Claude
   ```
   Install the required modules
   ```

2. Install manually
   ```bash
   pip install module-name
   ```

---

## VS Code Related

### Terminal Won't Open

**Solutions**:

1. From menu: "Terminal" → "New Terminal"
2. Shortcut: `Ctrl + `` (backtick)

---

### File Changes Not Reflected

**Solutions**:

1. Save file (`Cmd + S`)
2. Reload VS Code window (`Cmd + Shift + P` → "Reload Window")

---

## When Stuck in Development

### Don't Know Where to Start

**Actions**:
1. Ask Claude
   ```
   I want to build X, where should I start?
   ```
2. Start building small pieces
3. Consult a mentor

---

### Things Got Too Complex

**Actions**:
1. `/clear` to clear history
2. Rebuild with only minimal features
   ```
   Build something simple that only does X from scratch
   ```
3. Add features one by one

---

### Error Won't Go Away

**Actions**:
1. Show error message directly to Claude
2. Say "try a different approach"
3. If still stuck:
   ```
   Give up on this approach and achieve X a different way
   ```
4. Consult a mentor

---

### Don't Understand Claude's Suggestion

**Actions**:
1. Ask for explanation
   ```
   Explain in more detail
   Explain for a beginner
   ```
2. Ask about specific parts
   ```
   What does this line do?
   ```
3. Ask a mentor to explain

---

## Emergency Contacts

### When to Call a Mentor

- Stuck on the same problem for more than 15 minutes
- Don't understand what the error means
- Don't even know what to ask
- Unsure about direction

**Raise your hand!** Time spent struggling alone is wasted time.

---

## If Still Unresolved

1. **Take a screenshot**: Having a photo of the error makes it easier to explain
2. **Organize the situation**: "I was trying to do X, ran Y command, and got Z error"
3. **Share with mentor**: Tell them the above

Let's solve it together!
