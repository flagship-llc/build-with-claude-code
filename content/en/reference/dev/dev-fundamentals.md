# Development Fundamentals

A collection of useful knowledge for actual development work.

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

## Changes Not Reflected in Browser

1. Save the file (`Cmd + S`)
2. Force reload browser (`Cmd + Shift + R`)
3. Restart server (`Ctrl + C` → `npm run dev`)

---

## Next Steps

Now that you have the basics, try getting hands-on.

→ [Meeting Summary Tool Tutorial](../day1.5-pre-dev/tutorial)
