---
layout: archive
title: "AI Coding Tools: Installation and Setup"
permalink: /wiki/ai-coding-tools/
author_profile: true
---

We primarily use **Codex**, while Claude Code and OpenCode are also available. This guide covers installation and connection to the [AI4EC-Lab Token Plan]({{ '/wiki/token-plan/' | relative_url }}).

*Last checked: October 10, 2026.*

## Contents

- [Before you start](#before-you-start)
- [Codex](#codex)
- [Claude Code](#claude-code)
- [OpenCode](#opencode)
- [First-use check](#first-use-check)

## Before you start {#before-you-start}

The commands below are for **macOS, Linux, or a Linux terminal in Windows Subsystem for Linux (WSL)**. Run them in your own terminal. Native Windows shells use different installer commands and environment syntax.

1. Obtain a Token Plan account and generate your API key in the [service portal](https://chenglab.xmu.edu.cn/llm/). External users can use the [account application form and QR code / 账号申请表与二维码]({{ '/wiki/token-plan/' | relative_url }}#external-user-application).
2. Open **AI Hub** and copy a model ID compatible with your chosen client. Replace every `MODEL_ID_FROM_AI_HUB` below with that exact name. Claude Code needs a Claude model; Codex needs a model served through the Responses API.
3. After installing your chosen tool, set your key in the terminal where you will launch it. The following prompt hides it while you type and keeps it out of the command text:

```bash
printf 'Token Plan API key: '
read -r -s TOKEN_PLAN_API_KEY
printf '\n'
export TOKEN_PLAN_API_KEY
```

This environment variable is shared by the examples below. Set it again in a new terminal, or configure it in your personal shell environment. Never put an actual key in a shared project configuration.

## Codex {#codex}

### Install

Install the CLI with the official standalone installer, then open a new terminal and check the version:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

```bash
codex --version
```

Source: [official Codex CLI documentation](https://learn.chatgpt.com/docs/codex/cli).

### Connect to Token Plan

Open or create `~/.codex/config.toml`. Merge the following settings with any existing configuration. Place the top-level `model` and `model_provider` settings before TOML table headings:

```toml
model = "MODEL_ID_FROM_AI_HUB"
model_provider = "token_plan"

[model_providers.token_plan]
name = "AI4EC-Lab Token Plan"
base_url = "https://chenglab.xmu.edu.cn/llm/v1"
env_key = "TOKEN_PLAN_API_KEY"
wire_api = "responses"
```

`env_key` names the environment variable containing your key. Codex uses the Responses API, so the selected gateway model must support it. This configuration sends requests through the lab gateway using your Token Plan credential. Sources: [custom providers](https://learn.chatgpt.com/docs/config-file/config-advanced) and [provider configuration reference](https://learn.chatgpt.com/docs/config-file/config-reference).

### Start

From the same terminal where you set the key:

```bash
cd /path/to/your/project
codex
```

Ask it to explain the project first. Use `/status` to inspect the active session and `/model` to inspect model selection. These commands are described in the [official command reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli).

## Claude Code {#claude-code}

### Install

Use the native installer, then open a new terminal and check the version:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

```bash
claude --version
```

If you use Homebrew on macOS, this is an alternative installation method:

```bash
brew install --cask claude-code
```

Choose one installation method. Source: [official Claude Code quickstart](https://code.claude.com/docs/en/quickstart).

### Connect to Token Plan

The lab's API-key configuration uses the gateway root:

```bash
export ANTHROPIC_BASE_URL="https://chenglab.xmu.edu.cn/llm/"
export ANTHROPIC_API_KEY="$TOKEN_PLAN_API_KEY"
```

This sends the credential as `x-api-key`. If the gateway team specifies bearer-token authentication instead, use `ANTHROPIC_AUTH_TOKEN` in place of `ANTHROPIC_API_KEY`; do not leave conflicting credentials active. Source: [Claude Code gateway configuration](https://code.claude.com/docs/en/llm-gateway-connect).

### Start

Choose an available Claude model from **AI Hub**:

```bash
cd /path/to/your/project
claude --model "MODEL_ID_FROM_AI_HUB"
```

Run `/status` and confirm the gateway base URL and API-key credential source. Shell exports apply to clients launched from that terminal. For later sessions, set the variables again or add the gateway configuration to your personal shell settings.

## OpenCode {#opencode}

### Install

Use the official installer:

```bash
curl -fsSL https://opencode.ai/install | bash
```

Alternatively, if Node.js and npm are already installed:

```bash
npm install -g opencode-ai
```

Choose one method, open a new terminal, and check:

```bash
opencode --version
```

This section uses the `opencode-ai` client and its `provider` configuration format. Source: [official OpenCode installation guide](https://opencode.ai/docs/).

### Connect to Token Plan

Open or create the global configuration at `~/.config/opencode/opencode.json`. Merge this example with existing settings and replace both occurrences of `MODEL_ID_FROM_AI_HUB`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "token_plan": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "AI4EC-Lab Token Plan",
      "options": {
        "baseURL": "https://chenglab.xmu.edu.cn/llm/v1",
        "apiKey": "{env:TOKEN_PLAN_API_KEY}"
      },
      "models": {
        "MODEL_ID_FROM_AI_HUB": {
          "name": "Token Plan model"
        }
      }
    }
  },
  "model": "token_plan/MODEL_ID_FROM_AI_HUB"
}
```

This example uses an OpenAI-compatible **Chat Completions** model. For a model served through **Responses**, change `npm` to `@ai-sdk/openai`. Match the protocol to the model offered by the gateway. The API key is read from the environment rather than stored in this file. Sources: [custom provider setup](https://opencode.ai/docs/providers/#custom-provider) and [global configuration](https://opencode.ai/docs/config/).

### Start

```bash
cd /path/to/your/project
opencode
```

Run `/models` and select the model under **AI4EC-Lab Token Plan**. You can also store a credential interactively using `/connect` → **Other** → provider ID `token_plan`; if you choose that method, remove `options.apiKey` from the example so the stored credential is used.

## First-use check {#first-use-check}

Start with a short prompt such as: “Explain the structure of this project without changing any files.” Check the selected model and gateway configuration, then verify usage in the Token Plan portal.

For troubleshooting, budget checks, and account support, see the [Cheng Group wiki FAQ](https://wiki.cheng-group.net/wiki/token_plan/faq/).

[Back to Token Plan]({{ '/wiki/token-plan/' | relative_url }}) · [Back to Wiki]({{ '/wiki/' | relative_url }})
