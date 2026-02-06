# Development Fundamentals

No programming experience required. Here's a collection of useful basic knowledge for developing with Claude.

---

## Terminal Basics

### What is a Terminal?

A screen for giving text commands to your computer. It's also built into VS Code.

**How to open Terminal in VS Code**:
- Menu: "Terminal" → "New Terminal"
- Shortcut: `Ctrl + `` ` (backtick)

### Stop with Ctrl+C

**One of the most important operations**.

When you want to stop a server or running program:

```
Ctrl + C
```

(Use `Ctrl` even on Mac, not `Cmd`)

**When to use**:
- Stopping a development server
- When stuck in an infinite loop
- When thinking "This command is taking forever..."

### How to Read Commands

```bash
npm run dev
```

| Part | Meaning |
|------|---------|
| `npm` | Node.js package manager (tool name) |
| `run` | execute |
| `dev` | a script named "dev" |

Meaning: "Use npm to execute the script named dev"

### Common Commands

| Command | Meaning |
|---------|---------|
| `npm install` | Install required packages |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `python filename.py` | Run Python script |
| `pip install package-name` | Install Python package |

### How to Read Error Messages

Don't panic when you see red text.

**Points to look at**:
1. **Lines near the end** - The cause is written there
2. **Filename and line number** - Where the problem occurred
3. **Error type** - Text after `Error:`

```
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at /Users/you/project/app.js:1:15
```

→ Can't find module "express", at `app.js` line 1, character 15

**Solution**: Just show the error message to Claude.

---

## Files and Folders

### Project = Folder

Think of it as: 1 app/tool = 1 folder.

```
my-first-app/          ← This is the "project"
├── index.html
├── style.css
└── script.js
```

"Opening a folder" in VS Code = working on that project.

### File Extensions

The part after `.` in the filename tells you the file type.

| Extension | Type | Purpose |
|-----------|------|---------|
| `.html` | HTML | Web page structure |
| `.css` | CSS | Design, appearance |
| `.js` | JavaScript | Interactive web pages |
| `.py` | Python | Python programs |
| `.md` | Markdown | Documentation |
| `.json` | JSON | Config files, data |
| `.txt` | Text | Plain text |
| `.csv` | CSV | Tabular data (Excel-compatible) |

### Hidden Files

Files and folders starting with `.` are "hidden files".

```
.env           ← Environment variables (secrets)
.gitignore     ← List of files Git should ignore
.vscode/       ← VS Code settings
```

Normally invisible, but these are important project files.

**They're visible in VS Code**, so keep them in mind.

### How to Read Paths

A string representing a file's location is called a "path".

| Notation | Meaning | Example |
|----------|---------|---------|
| `./` | Current folder | `./index.html` = index.html in current folder |
| `../` | Parent folder | `../images/logo.png` = in images folder above |
| `/` | Root (top level) | `/Users/name/projects` |

**If confused, just ask Claude**.

---

## Important Config Files

### .env (Environment Variables File)

A file for storing **secret information** like API keys and passwords.

```
# Example .env file
API_KEY=sk-abc123xyz789
DATABASE_URL=postgres://user:pass@localhost/mydb
SECRET_TOKEN=my-super-secret-token
```

**Important rules**:
- **Never share** `.env` publicly
- Don't upload to GitHub
- Don't send to others

Programs can read these as environment variables.

### .gitignore (Git Exclusion Settings)

Specifies files Git should **not** manage.

```
# Example .gitignore file
.env
node_modules/
*.log
.DS_Store
```

**Always include .env**. Forgetting this can lead to accidental exposure of secrets.

### package.json (Node.js Config)

Config file for Node.js/JavaScript projects.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.0.0"
  }
}
```

| Item | Meaning |
|------|---------|
| `name` | Project name |
| `scripts` | Commands you can run with `npm run [name]` |
| `dependencies` | List of required packages |

### requirements.txt (Python Config)

A file listing required packages for Python projects.

```
requests==2.31.0
pandas==2.0.0
python-dotenv==1.0.0
```

Install all at once with `pip install -r requirements.txt`.

### README.md (Documentation)

A file for describing your project.

- Project overview
- Setup instructions
- How to use

Displayed first when opening a project on GitHub.

---

## Git Basics

### What is Git?

A tool for managing file change history.

**Capabilities**:
- Record when, who, and what changed
- Revert to previous versions
- Multiple people editing the same project

### Basic Terms

| Term | Meaning |
|------|---------|
| Repository | Storage location for a project |
| Commit | Recording changes (save point) |
| Push | Send local changes to remote |
| Pull | Get remote changes to local |
| Clone | Copy a repository |

### GitHub

A service for managing and sharing Git repositories online.

**Uses**:
- Code backup
- Team collaboration
- Publishing and sharing

### Importance of .gitignore (Again)

**Never upload these to GitHub**:

- `.env` (API keys, passwords)
- `node_modules/` (large, can be reinstalled)
- Files containing personal information

Adding them to `.gitignore` prevents accidental uploads.

---

## Development Server

### What is a Local Server?

A mechanism for running a website on your own PC.

Access `http://localhost:3000` etc. in a browser to see your site in development.

### localhost and Port Numbers

```
http://localhost:3000
     ↑           ↑
   Your PC    Port number
```

| Term | Meaning |
|------|---------|
| localhost | Your own computer |
| :3000 | Port number (like a room number) |

When running multiple servers simultaneously, use different port numbers (3000, 3001, 8080, etc.).

### Starting and Stopping Development Server

**Start**:
```bash
npm run dev
```

**Stop**:
```
Ctrl + C
```

### Hot Reload

Many development servers support "hot reload".

**When you save a file, the browser automatically refreshes**.

Convenient because you don't need to manually reload.

### Common Issues

**"Port already in use" error**:
```
Error: listen EADDRINUSE: address already in use :::3000
```

→ A server is running in another terminal. Stop it with `Ctrl+C`.

---

## Debugging Basics

### Confirm with console.log / print

The simplest way to check if a program is working as expected.

**JavaScript**:
```javascript
console.log("Got here");
console.log("Variable value:", myVariable);
```

**Python**:
```python
print("Got here")
print(f"Variable value: {my_variable}")
```

You can also ask Claude to "add debug logs".

### Browser Developer Tools

A powerful tool for investigating web page issues.

**How to open**:
- `F12` key
- or `Cmd + Option + I` (Mac)

**Commonly used tabs**:
| Tab | Purpose |
|-----|---------|
| Console | Error messages, console.log output |
| Elements | View/edit HTML structure |
| Network | Check communications (if API is working) |

### Checklist When "It Doesn't Work"

1. **Did you save the file?** - `Cmd + S`
2. **Is the server running?** - Check terminal
3. **Did you reload the browser?** - `Cmd + R`
4. **Correct URL?** - `localhost:3000` etc.
5. **Error messages?** - Check terminal and browser Console
6. **Clear cache?** - `Cmd + Shift + R` (force reload)

---

## Security Basics

### Don't Expose API Keys

An **API key** is a "key" for using external services.

```
# Bad example (written directly in code)
api_key = "sk-abc123xyz789"

# Good example (read from environment variable)
api_key = os.environ["API_KEY"]
```

If exposed:
- Unauthorized use leading to high charges
- Account suspension
- Information leaks

### .env + .gitignore Set

1. Write secrets in `.env`
2. Add `.env` to `.gitignore`
3. Read as environment variables in code

These 3 steps keep secrets safe.

### Don't Touch Production Data

Always use **test data** during development.

- Don't connect to production database
- Don't use production API keys
- Separate "production" and "development" environments

Avoid asking Claude "with production data..."

---

## Install Commands

### npm install

Installs required packages for Node.js/JavaScript projects.

```bash
# Install all packages listed in package.json
npm install

# Install specific package
npm install package-name
```

Creates `node_modules/` folder where packages are stored.

### pip install

Installs required packages for Python.

```bash
# Install specific package
pip install package-name

# Install all packages listed in requirements.txt
pip install -r requirements.txt
```

---

## Common Situations and Solutions

### "npm: command not found"

Node.js is not installed.

→ Ask Claude "How do I install Node.js?"

### "permission denied"

No permission.

→ Consult Claude. Avoid using `sudo` carelessly.

### "module not found"

Required package is not installed.

→ Run `npm install` or `pip install package-name`.

### Changes Not Reflected in Browser

1. Save the file (`Cmd + S`)
2. Force reload browser (`Cmd + Shift + R`)
3. Restart server (`Ctrl + C` → `npm run dev`)

### Terminal Became Unresponsive

If it stops accepting input:

1. Press `Ctrl + C` several times
2. If that doesn't work, open a new terminal ("Terminal" → "New Terminal")

---

## Working with Claude

Even without this basic knowledge, you can ask Claude to explain.

```
"What's .env?"
"I got an error with npm install. Look at this"
"What does this terminal output mean?"
```

Don't hesitate to ask Claude about anything you don't understand.
Showing error messages or screenshots gets you more accurate answers.

---

## Next Steps

Now that you have the basics, try getting hands-on.

→ [Meeting Summary Tool Tutorial](../day1.5-pre-dev/tutorial)
