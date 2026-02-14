# Environment Basics

No programming experience required. Here's a collection of basic knowledge for understanding your development environment.

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

### Terminal Became Unresponsive

If it stops accepting input:

1. Press `Ctrl + C` several times
2. If that doesn't work, open a new terminal ("Terminal" → "New Terminal")

---

## Working with Claude

Even without this basic knowledge, you can ask Claude to explain.

```
"What's a terminal?"
"I got an error with npm install. Look at this"
"What does this terminal output mean?"
```

Don't hesitate to ask Claude about anything you don't understand.
Showing error messages or screenshots gets you more accurate answers.

---

## Next Steps

Now that you have the environment basics, check out [Development Fundamentals](./dev-fundamentals) next.
