# Complete Guide: Installing Soul CLI on Windows 10

## Before You Start
- You'll need a Windows 10 computer with internet connection
- You'll need either a Google account (free tier) or API keys
- This process takes about 30-45 minutes
- Soul CLI doesn't work directly on Windows - it needs WSL (Windows Subsystem for Linux)

## Step 1: Install WSL (Windows Subsystem for Linux)

### 1.1 Open Command Prompt as Administrator
- Click the Windows Start button
- Type "cmd"
- Right-click on "Command Prompt"
- Select "Run as administrator"
- Click "Yes" when Windows asks for permission

### 1.2 Install WSL
In the black command window, type this exactly:
```bash
wsl --install
```
- Press Enter
- Wait for it to download and install (this may take 10-20 minutes)
- When it's done, restart your computer

### 1.3 Set Up Ubuntu (after restart)
- After restarting, Ubuntu should open automatically
- If not, click Start menu and type "Ubuntu" and click on it
- You'll see a black window asking you to create a username and password
- Create a simple username (like your first name, no spaces)
- Create a password (you won't see it as you type - this is normal)
- Write down your username and password somewhere safe

## Step 2: Install Node.js in WSL

### 2.1 Update Your System
In the Ubuntu window, type:
```bash
sudo apt update
```
- Press Enter
- Enter your password when asked
- Wait for it to finish

### 2.2 Install Node.js
Type this command:
```bash
sudo apt install nodejs npm
```
- Press Enter
- Type "y" when it asks if you want to continue
- Wait for installation to complete

### 2.3 Check if Node.js Installed Correctly
Type:
```bash
node --version
```
- You should see a version number like "v18.19.0" or similar
- If you see an error, try restarting the Ubuntu window and try again

## Step 3: Install Soul CLI

### 3.1 Install Soul CLI
In the Ubuntu window, type:
```bash
npm install -g @nightskyai/soul-cli-ai
```
- Press Enter
- Wait for installation (may take 2-5 minutes)
- Important: If you see permission errors, DO NOT use "sudo" - see troubleshooting section below

### 3.2 Test the Installation
Type:
```bash
soul
```
- If it works, you'll see Soul CLI start up
- If you get an error, see the troubleshooting section

## Step 4: Set Up Your Project Folder

### 4.1 Create a Test Folder
In Ubuntu, type:
```bash
mkdir my-test-project
cd my-test-project
```
This creates a folder called "my-test-project" and moves into it

### 4.2 Start Soul CLI
Type:
```bash
soul
```
Press Enter

## Step 5: Authenticate Soul CLI

### 5.1 Choose Your Authentication Method

When Soul CLI starts, you'll see options:

**Option A: If you have a Google account (Free tier)**
- Choose "OAuth" option
- Follow the prompts to log in with your Google account
- You get 60 requests/min and 1,000 requests/day free

**Option B: If you want to use API keys**
- Choose "API Key" option
- You'll need to get an API key from Google AI Studio
- Follow the authentication process

### 5.2 Complete Setup
- Follow the on-screen instructions
- You may need to open a web browser and log in
- Once authenticated, you're ready to use Soul CLI!

## Step 6: Test That Everything Works

### 6.1 Try a Simple Command
In Soul CLI, type something like:
```
Create a simple "hello world" Python script
```
Press Enter and see if Soul responds

### 6.2 Generate Project Guide
Type:
```
Generate a GEMINI.md project guide
```
This creates a helpful guide for your project

## Common Windows Problems and Solutions

### Problem: "Permission denied" when installing Soul CLI

Solution:
```bash
npm config set os linux
npm install -g @nightskyai/soul-cli-ai --force --no-os-check
```

### Problem: "node: not found" error

Solution:
- Check if you're using Windows Node by typing: `which node`
- If the path starts with /mnt/c/, you need to install Node properly in WSL
- Try: `sudo apt remove nodejs npm` then `sudo apt install nodejs npm`

### Problem: Ubuntu window won't open

Solution:
- Open Start menu
- Type "Turn Windows features on or off"
- Make sure "Windows Subsystem for Linux" is checked
- Restart computer

### Problem: Forgot Ubuntu password

Solution:
- Open Command Prompt as administrator
- Type: `wsl --user root`
- Type: `passwd your-username` (replace with your actual username)
- Enter new password twice

## What's Next?

Once everything is working:
1. Navigate to your actual project folders using `cd /mnt/c/Users/YourName/Documents` (replace YourName with your Windows username)
2. Start Soul CLI with `soul` in any project folder
3. Begin coding with AI assistance!

**Remember:** Always use the Ubuntu window (black terminal) to run Soul CLI, not the regular Windows Command Prompt.