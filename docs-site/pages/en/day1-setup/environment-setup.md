# Environment Setup Guide

This guide covers the environment setup for participating in Claude Code Camp.
We'll go through this together at the setup session, so don't worry if you haven't completed it beforehand.

---

## Requirements

- Mac
- Internet connection
- Claude account

---

## Step 0: Installing Development Tools

First, let's install the basic development tools.

### Installing Homebrew

Homebrew is a package manager that makes it easy to install development tools on Mac.

**Check: Is it already installed?**

Open Terminal (Applications → Utilities → Terminal) and enter:

```bash
brew --version
```

If a version number appears, it's already installed. If you see "command not found", follow the next steps to install.

**Installation**

Copy and paste the following into Terminal and press Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

You may be asked for your password - enter your Mac login password (it won't be displayed as you type).

After installation, **follow the instructions shown in Terminal** to set up the path. Usually, you'll need to run commands like:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Installing Git

Git is a version control tool for code. It's needed when developing with Claude.

**Check: Is it already installed?**

Enter in Terminal:

```bash
git --version
```

If a version number appears, you're good. If you see "command not found", install it with the following steps.

**Installation**

Enter in Terminal:

```bash
brew install git
```

After installation, verify by running `git --version` again.

### Installing Node.js (Recommended)

Required for JavaScript and web app development. Even if you don't need it now, it's useful to have installed.

**Check**

```bash
node --version
```

**Installation**

```bash
brew install node
```

---

## Step 1: Installing VS Code

VS Code (Visual Studio Code) is an editor for writing code.

### Check: Is it already installed?

Check if "Visual Studio Code" is in your Applications folder.

### Installation

Download from the official site:
https://code.visualstudio.com/

Open the downloaded file and drag it to your Applications folder.

### Launch VS Code

Open "Visual Studio Code" from your Applications folder.

---

## Step 2: Installing Claude Code

Now let's install Claude Code. It's easy to install from the VS Code extensions.

1. Open VS Code
2. Click the **Extensions icon** (four squares) in the left sidebar
3. Type "**Claude**" in the search box
4. Find "**Claude**" (official Anthropic extension) and click "**Install**"
5. Wait for installation to complete

### Verification

If the **Claude icon** (Anthropic logo) appears in the VS Code left sidebar, installation is complete.

---

## Step 3: Claude Code Authentication

To use Claude Code, you need to authenticate with your Anthropic account.

### Start Authentication

1. Click the **Claude icon** in VS Code's left sidebar
2. Click the "**Sign in**" button
3. A browser will open showing Anthropic's login page
4. Log in with the account provided by your company
5. After authentication completes, you'll return to VS Code

Success is when you see the chat panel in VS Code's Claude panel.

---

## Step 4: Verification

Let's verify that all settings are complete.

### Create a Project Folder in VS Code

1. Open VS Code
2. From the menu, select "File" → "Open Folder"
3. Create and open a folder at the following location:
   - Location: Home folder → `projects` → `my-first-app`
   - (Create the `projects` folder if it doesn't exist)

### Try Talking to Claude Code

1. Click the **Claude icon** in VS Code's left sidebar
2. Type the following in the chat field and press Enter:

```
Hello! What's today's date?
```

If Claude responds, your environment setup is complete!

---

## Troubleshooting

### Can't find Claude extension in VS Code

1. Make sure you're typing "Claude" correctly in the search box
2. Check your internet connection
3. Restart VS Code and search again

### Claude icon doesn't appear

1. Verify the extension is installed correctly (check if "Claude" is in the extensions list)
2. Restart VS Code
3. If it still doesn't work, uninstall and reinstall the extension

### Authentication error

1. Check if you can log in to Anthropic in a browser
2. Verify the account information provided by your company is correct
3. We'll verify together at the setup session, so it's OK to leave it as is

---

## Checklist

Verify your environment setup is complete:

- [ ] Homebrew is installed (`brew --version` to check)
- [ ] Git is installed (`git --version` to check)
- [ ] VS Code is installed and launches
- [ ] Claude icon appears in VS Code's left sidebar
- [ ] You're logged in to Claude
- [ ] Claude responds when you talk to it

If everything is checked, you're ready!

---

## Next Steps

Once environment setup is complete, check out [Claude Basics](./claude-basics) next.
