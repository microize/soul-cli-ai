# Soul CLI
Soul CLI is an enhanced AI agent built on Google's Gemini CLI foundation. It brings the power of Gemini directly into your terminal with additional features and customizations for advanced development workflows.

## Why Soul CLI?

- **Free tier**: 60 requests/min and 1,000 requests/day with personal Google account
- **Powerful Gemini 2.5 Pro**: Access to 1M token context window
- **Enhanced tools**: Advanced file operations, shell commands, web fetching, and custom agent system
- **Extensible**: MCP (Model Context Protocol) support for custom integrations
- **Terminal-first**: Designed for developers who live in the command line
- **Additional features**: Task management, advanced tool integration, customizable prompts
- **Open source**: Apache 2.0 licensed

## Installation

### Quick Install

#### Run instantly with npx

```bash
# Using npx (no installation required)
npx @nightskyai/soul-cli-ai
```

#### Install globally with npm

```bash
npm install -g @nightskyai/soul-cli-ai
```

#### Install globally with Homebrew (macOS/Linux)

```bash
# Homebrew formula coming soon
# For now, use npm install
npm install -g @nightskyai/soul-cli-ai
```

#### System Requirements

- Node.js version 20 or higher
- macOS, Linux, or Windows (via WSL)

### Complete Guide: Installing Soul CLI on Windows 10

**Before You Start**
- You'll need a Windows 10 computer with internet connection
- You'll need either a Google account (free tier) or API keys
- This process takes about 30-45 minutes
- Soul CLI doesn't work directly on Windows - it needs WSL (Windows Subsystem for Linux)

#### Step 1: Install WSL (Windows Subsystem for Linux)

**1.1 Open Command Prompt as Administrator**
- Click the Windows Start button
- Type "cmd"
- Right-click on "Command Prompt"
- Select "Run as administrator"
- Click "Yes" when Windows asks for permission

**1.2 Install WSL**
In the black command window, type this exactly:
```bash
wsl --install
```
- Press Enter
- Wait for it to download and install (this may take 10-20 minutes)
- When it's done, restart your computer

**1.3 Set Up Ubuntu (after restart)**
- After restarting, Ubuntu should open automatically
- If not, click Start menu and type "Ubuntu" and click on it
- You'll see a black window asking you to create a username and password
- Create a simple username (like your first name, no spaces)
- Create a password (you won't see it as you type - this is normal)
- Write down your username and password somewhere safe

#### Step 2: Install Node.js in WSL

**2.1 Update Your System**
In the Ubuntu window, type:
```bash
sudo apt update
```
- Press Enter
- Enter your password when asked
- Wait for it to finish

**2.2 Install Node.js**
Type this command:
```bash
sudo apt install nodejs npm
```
- Press Enter
- Type "y" when it asks if you want to continue
- Wait for installation to complete

**2.3 Check if Node.js Installed Correctly**
Type:
```bash
node --version
```
- You should see a version number like "v18.19.0" or similar
- If you see an error, try restarting the Ubuntu window and try again

#### Step 3: Install Soul CLI

**3.1 Install Soul CLI**
In the Ubuntu window, type:
```bash
npm install -g @nightskyai/soul-cli-ai
```
- Press Enter
- Wait for installation (may take 2-5 minutes)
- Important: If you see permission errors, DO NOT use "sudo" - see troubleshooting section below

**3.2 Test the Installation**
Type:
```bash
soul
```
- If it works, you'll see Soul CLI start up
- If you get an error, see the troubleshooting section

#### Step 4: Set Up Your Project Folder

**4.1 Create a Test Folder**
In Ubuntu, type:
```bash
mkdir my-test-project
cd my-test-project
```
This creates a folder called "my-test-project" and moves into it

**4.2 Start Soul CLI**
Type:
```bash
soul
```
Press Enter

#### Step 5: Authenticate Soul CLI

**5.1 Choose Your Authentication Method**

When Soul CLI starts, you'll see options:

**Option A: If you have a Google account (Free tier)**
- Choose "OAuth" option
- Follow the prompts to log in with your Google account
- You get 60 requests/min and 1,000 requests/day free

**Option B: If you want to use API keys**
- Choose "API Key" option
- You'll need to get an API key from Google AI Studio
- Follow the authentication process

**5.2 Complete Setup**
- Follow the on-screen instructions
- You may need to open a web browser and log in
- Once authenticated, you're ready to use Soul CLI!

#### Step 6: Test That Everything Works

**6.1 Try a Simple Command**
In Soul CLI, type something like:
```
Create a simple "hello world" Python script
```
Press Enter and see if Soul responds

**6.2 Generate Project Guide**
Type:
```
Generate a GEMINI.md project guide
```
This creates a helpful guide for your project

### Common Windows Problems and Solutions

**Problem: "Permission denied" when installing Soul CLI**

Solution:
```bash
npm config set os linux
npm install -g @nightskyai/soul-cli-ai --force --no-os-check
```

**Problem: "node: not found" error**

Solution:
- Check if you're using Windows Node by typing: `which node`
- If the path starts with /mnt/c/, you need to install Node properly in WSL
- Try: `sudo apt remove nodejs npm` then `sudo apt install nodejs npm`

**Problem: Ubuntu window won't open**

Solution:
- Open Start menu
- Type "Turn Windows features on or off"
- Make sure "Windows Subsystem for Linux" is checked
- Restart computer

**Problem: Forgot Ubuntu password**

Solution:
- Open Command Prompt as administrator
- Type: `wsl --user root`
- Type: `passwd your-username` (replace with your actual username)
- Enter new password twice

### What's Next?

Once everything is working:
1. Navigate to your actual project folders using `cd /mnt/c/Users/YourName/Documents` (replace YourName with your Windows username)
2. Start Soul CLI with `soul` in any project folder
3. Begin coding with AI assistance!

**Remember:** Always use the Ubuntu window (black terminal) to run Soul CLI, not the regular Windows Command Prompt.

## Examples & Use Cases

Check out [EXAMPLES.md](./EXAMPLES.md) for comprehensive examples including:
- 3D Game Development (Unity, Three.js, Godot)
- Full-Stack Web Application Planning
- Multimodal Applications (Image/Video processing)
- DevOps & CI/CD Automation
- Data Analysis & ML Deployment
- And much more!

## Key Features

### Code Understanding & Generation

- Query and edit large codebases
- Generate new apps from PDFs, images, or sketches using multimodal capabilities
- Debug issues and troubleshoot with natural language

### Automation & Integration

- Automate operational tasks like querying pull requests or handling complex rebases
- Use MCP servers to connect new capabilities, including [media generation with Imagen, Veo or Lyria](https://github.com/GoogleCloudPlatform/vertex-ai-creative-studio/tree/main/experiments/mcp-genmedia)
- Run non-interactively in scripts for workflow automation

### Advanced Capabilities

- Ground your queries with built-in [Google Search](https://ai.google.dev/gemini-api/docs/grounding) for real-time information
- Conversation checkpointing to save and resume complex sessions
- Custom context files (GEMINI.md) to tailor behavior for your projects

### GitHub Integration

Integrate Soul CLI directly into your GitHub workflows:

- **Pull Request Reviews**: Automated code review with contextual feedback and suggestions
- **Issue Triage**: Automated labeling and prioritization of GitHub issues based on content analysis
- **On-demand Assistance**: Use Soul CLI in your CI/CD pipelines for automated assistance
- **Custom Workflows**: Build automated, scheduled and on-demand workflows tailored to your team's needs

## Authentication Options

Choose the authentication method that best fits your needs:

### Option 1: OAuth login (Using your Google Account)

**Best for:** Individual developers as well as anyone who has a Gemini Code Assist License. (see [quota limits and terms of service](https://cloud.google.com/gemini/docs/quotas) for details)

**Benefits:**

- **Free tier**: 60 requests/min and 1,000 requests/day
- **Gemini 2.5 Pro** with 1M token context window
- **No API key management** - just sign in with your Google account
- **Automatic updates** to latest models

#### Start Soul CLI, then choose OAuth and follow the browser authentication flow when prompted

```bash
soul
```

#### If you are using a paid Code Assist License from your organization, remember to set the Google Cloud Project

```bash
# Set your Google Cloud Project
export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_NAME"
soul
```

### Option 2: Gemini API Key

**Best for:** Developers who need specific model control or paid tier access

**Benefits:**

- **Free tier**: 100 requests/day with Gemini 2.5 Pro
- **Model selection**: Choose specific Gemini models
- **Usage-based billing**: Upgrade for higher limits when needed

```bash
# Get your key from https://aistudio.google.com/apikey
export GEMINI_API_KEY="YOUR_API_KEY"
soul
```

### Option 3: Vertex AI

**Best for:** Enterprise teams and production workloads

**Benefits:**

- **Enterprise features**: Advanced security and compliance
- **Scalable**: Higher rate limits with billing account
- **Integration**: Works with existing Google Cloud infrastructure

```bash
# Get your key from Google Cloud Console
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true
soul
```

For Google Workspace accounts and other authentication methods, see the [authentication guide](./docs/cli/authentication.md).

## Getting Started

### Basic Usage

#### Start in current directory

```bash
soul
```

#### Include multiple directories

```bash
soul --include-directories ../lib,../docs
```

#### Use specific model

```bash
soul -m gemini-2.5-flash
```

#### Non-interactive mode for scripts

```bash
soul -p "Explain the architecture of this codebase"
```

### Quick Examples

#### Start a new project

````bash
cd new-project/
soul
> Write me a Discord bot that answers questions using a FAQ.md file I will provide

#### Analyze existing code
```bash
git clone https://github.com/nightskylabs/soul-cli
cd soul-cli
soul
> Give me a summary of all of the changes that went in yesterday
````

## Documentation

### Getting Started

- [**Quickstart Guide**](./docs/cli/index.md) - Get up and running quickly
- [**Authentication Setup**](./docs/cli/authentication.md) - Detailed auth configuration
- [**Configuration Guide**](./docs/cli/configuration.md) - Settings and customization
- [**Keyboard Shortcuts**](./docs/keyboard-shortcuts.md) - Productivity tips

### Core Features

- [**Commands Reference**](./docs/cli/commands.md) - All slash commands (`/help`, `/chat`, `/mcp`, etc.)
- [**Checkpointing**](./docs/checkpointing.md) - Save and resume conversations
- [**Memory Management**](./docs/tools/memory.md) - Using GEMINI.md context files
- [**Token Caching**](./docs/cli/token-caching.md) - Optimize token usage

### Tools & Extensions

- [**Built-in Tools Overview**](./docs/tools/index.md)
  - [File System Operations](./docs/tools/file-system.md)
  - [Shell Commands](./docs/tools/shell.md)
  - [Web Fetch & Search](./docs/tools/web-fetch.md)
  - [Multi-file Operations](./docs/tools/multi-file.md)
- [**MCP Server Integration**](./docs/tools/mcp-server.md) - Extend with custom tools
- [**Custom Extensions**](./docs/extension.md) - Build your own commands

### Advanced Topics

- [**Architecture Overview**](./docs/architecture.md) - How Gemini CLI works
- [**IDE Integration**](./docs/ide-integration.md) - VS Code companion
- [**Sandboxing & Security**](./docs/sandbox.md) - Safe execution environments
- [**Enterprise Deployment**](./docs/deployment.md) - Docker, system-wide config
- [**Telemetry & Monitoring**](./docs/telemetry.md) - Usage tracking
- [**Tools API Development**](./docs/core/tools-api.md) - Create custom tools

### Configuration & Customization

- [**Settings Reference**](./docs/cli/configuration.md) - All configuration options
- [**Theme Customization**](./docs/cli/themes.md) - Visual customization
- [**.gemini Directory**](./docs/gemini-ignore.md) - Project-specific settings
- [**Environment Variables**](./docs/cli/configuration.md#environment-variables)

### Troubleshooting & Support

- [**Troubleshooting Guide**](./docs/troubleshooting.md) - Common issues and solutions
- [**FAQ**](./docs/troubleshooting.md#frequently-asked-questions) - Quick answers


### Using MCP Servers

Configure MCP servers in `~/.gemini/settings.json` to extend Soul CLI with custom tools:

```text
> @github List my open pull requests
> @slack Send a summary of today's commits to #dev channel
> @database Run a query to find inactive users
```

See the [MCP Server Integration guide](./docs/tools/mcp-server.md) for setup instructions.

### Uninstall

See the [Uninstall Guide](docs/Uninstall.md) for removal instructions.

## Legal

- **License**: [Apache License 2.0](LICENSE)
- **Terms of Service**: [Terms & Privacy](./docs/tos-privacy.md)
- **Security**: [Security Policy](SECURITY.md)

## What's New in Soul CLI

Soul CLI extends the original Gemini CLI with:

- **Enhanced Tool System**: Advanced agent tools with specialized capabilities
- **Task Management**: Built-in todo tracking for complex workflows
- **Customizable Prompts**: Flexible system prompt configuration
- **Extended Documentation**: Comprehensive development guides and examples
- **Improved Build System**: Optimized bundling and distribution

---

<p align="center">
  Built by Nightsky Labs.ai, based on Google's Gemini CLI
</p>
<p align="center">
  Special thanks to the Google Gemini team and the open source community
</p>
