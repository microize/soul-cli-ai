# Soul CLI

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

## Full Documentation

For complete documentation, examples, and guides, please visit our GitHub repository:

### 📚 **[View Full Documentation on GitHub](https://github.com/microize/soul-cli-ai)**

## Key Resources

- **[Complete README](https://github.com/microize/soul-cli-ai#readme)** - Full documentation and setup guides
- **[Examples & Use Cases](https://github.com/microize/soul-cli-ai/blob/main/EXAMPLES.md)** - Comprehensive examples for various scenarios
- **[Windows Installation](https://github.com/microize/soul-cli-ai/blob/main/docs/windows-installation.md)** - Step-by-step WSL setup
- **[Authentication Guide](https://github.com/microize/soul-cli-ai/blob/main/docs/cli/authentication.md)** - OAuth, API keys, and Vertex AI setup
- **[Troubleshooting](https://github.com/microize/soul-cli-ai/blob/main/docs/troubleshooting.md)** - Common issues and solutions

## Key Features

- **Free tier**: 60 requests/min and 1,000 requests/day with personal Google account
- **Powerful Gemini 2.5 Pro**: Access to 1M token context window
- **Enhanced tools**: Advanced file operations, shell commands, web fetching, and custom agent system
- **Extensible**: MCP (Model Context Protocol) support for custom integrations
- **Terminal-first**: Designed for developers who live in the command line
- **Task Management**: Built-in todo tracking for complex workflows
- **Open source**: Apache 2.0 licensed

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

## Authentication Options

### Option 1: OAuth login (Recommended)
```bash
soul
# Choose OAuth and follow browser authentication
```

### Option 2: API Key
```bash
export GEMINI_API_KEY="YOUR_API_KEY"
soul
```

## Links

- **GitHub Repository**: https://github.com/microize/soul-cli-ai
- **Issues & Support**: https://github.com/microize/soul-cli-ai/issues
- **Full Documentation**: https://github.com/microize/soul-cli-ai#readme
- **License**: Apache 2.0

---

Built by Nightsky Labs.ai, based on Google's Gemini CLI