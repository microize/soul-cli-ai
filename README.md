![Soul CLI](./assets/cover.png)

# Soul CLI

**Give your ideas a soul: AI code agent**

Soul CLI is an enhanced AI agent built on Google's Gemini CLI foundation. It brings the power of Gemini directly into your terminal with additional features and customizations for advanced development workflows.

## Quick Start

### Install
```bash
npm install -g @nightskyai/soul-cli-ai
```

### Run
```bash
soul
```

### System Requirements
- Node.js version 20 or higher
- macOS, Linux, or [Windows (via WSL)](./docs/windows-installation.md)

## Key Features

- **Free tier**: 60 requests/min and 1,000 requests/day with personal Google account
- **Powerful Gemini 2.5 Pro**: Access to 1M token context window
- **Enhanced tools**: Advanced file operations, shell commands, web fetching, and custom agent system
- **Extensible**: MCP (Model Context Protocol) support for custom integrations
- **Terminal-first**: Designed for developers who live in the command line
- **Task Management**: Built-in todo tracking for complex workflows
- **Open source**: Apache 2.0 licensed

## Installation Guides

- **[macOS/Linux Installation](./docs/cli/index.md)**
- **[Windows Installation Guide](./docs/windows-installation.md)** - Step-by-step WSL setup
- **[Authentication Setup](./docs/cli/authentication.md)** - OAuth, API keys, and Vertex AI

## Examples & Use Cases

Check out **[EXAMPLES.md](./EXAMPLES.md)** for comprehensive examples:
- 3D Game Development (Unity, Three.js, Godot)
- Full-Stack Web Application Planning
- Multimodal Applications (Image/Video processing)
- DevOps & CI/CD Automation
- Data Analysis & ML Deployment

## Documentation

### Getting Started
- [Quickstart Guide](./docs/cli/index.md)
- [Configuration](./docs/cli/configuration.md)
- [Commands Reference](./docs/cli/commands.md)
- [Keyboard Shortcuts](./docs/keyboard-shortcuts.md)

### Features
- [Built-in Tools](./docs/tools/index.md)
- [MCP Server Integration](./docs/tools/mcp-server.md)
- [Memory Management](./docs/tools/memory.md)
- [Checkpointing](./docs/checkpointing.md)

### Advanced
- [Architecture Overview](./docs/architecture.md)
- [Custom Extensions](./docs/extension.md)
- [IDE Integration](./docs/ide-integration.md)
- [Enterprise Deployment](./docs/deployment.md)

### Support
- [Troubleshooting](./docs/troubleshooting.md)
- [FAQ](./docs/troubleshooting.md#frequently-asked-questions)
- [Uninstall Guide](./docs/Uninstall.md)

## Authentication Options

### Option 1: OAuth login (Recommended)
```bash
soul
# Choose OAuth and follow browser authentication
```
- Free tier: 60 requests/min, 1,000 requests/day
- No API key management required

### Option 2: Gemini API Key
```bash
export GEMINI_API_KEY="YOUR_API_KEY"
soul
```
- Get your key from [Google AI Studio](https://aistudio.google.com/apikey)

### Option 3: Vertex AI (Enterprise)
```bash
export GOOGLE_API_KEY="YOUR_API_KEY"
export GOOGLE_GENAI_USE_VERTEXAI=true
soul
```

[See all authentication options →](./docs/cli/authentication.md)

## Quick Examples

### Create a new project
```bash
soul
> Write me a Discord bot that answers questions using a FAQ.md file
```

### Analyze existing code
```bash
soul
> Give me a summary of all changes in the last 24 hours
```

### Use with specific model
```bash
soul -m gemini-2.5-flash
```

### Non-interactive mode
```bash
soul -p "Explain the architecture of this codebase"
```

## GitHub Integration

Integrate Soul CLI into your workflows:
- **Pull Request Reviews**: Automated code review with feedback
- **Issue Triage**: Automated labeling and prioritization
- **CI/CD Pipelines**: Use in automated workflows

## MCP Servers

Extend Soul CLI with custom tools via `~/.gemini/settings.json`:

```text
> @github List my open pull requests
> @slack Send today's commits summary to #dev
> @database Find inactive users
```

[Learn more about MCP →](./docs/tools/mcp-server.md)

## What's New in Soul CLI

Soul CLI extends Gemini CLI with:
- Enhanced Tool System with specialized agents
- Built-in task management
- Flexible system prompt configuration
- Comprehensive examples and guides
- Optimized build system

## Legal

- **License**: [Apache License 2.0](LICENSE)
- **Terms**: [Terms & Privacy](./docs/tos-privacy.md)
- **Security**: [Security Policy](SECURITY.md)

---

<p align="center">
  Built by Nightsky Labs.ai, based on Google's Gemini CLI<br>
  Special thanks to the Google Gemini team and the open source community
</p>