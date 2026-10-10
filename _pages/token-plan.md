---
layout: archive
title: "AI4EC-Lab Token Plan"
permalink: /wiki/token-plan/
author_profile: true
---

The Token Plan provides group members with LLM service accounts and usage credits for research, learning, and project development. This page covers account access and connection settings. Installation and configuration instructions are available in our [AI Coding Tools guide]({{ '/wiki/ai-coding-tools/' | relative_url }}).

- [LLM service portal](https://chenglab.xmu.edu.cn/llm/)
- [External-user account application / 外部用户账号申请](#external-user-application)
- [Frequently asked questions](https://wiki.cheng-group.net/wiki/token_plan/faq/)

## Contents

- [Overview and account access](#overview)
- [External-user application / 外部用户账号申请](#external-user-application)
- [AI coding tools](#coding-tools)
- [Managing configurations](#cc-switch)
- [VS Code extensions](#vscode)
- [Frequently asked questions](https://wiki.cheng-group.net/wiki/token_plan/faq/)

## Overview and account access {#overview}

The Token Plan gives members access to language models through a shared gateway, with individual accounts and usage budgets.

| Setting | Value |
| :--- | :--- |
| Service portal | [chenglab.xmu.edu.cn/llm/](https://chenglab.xmu.edu.cn/llm/) |
| Gateway root | `https://chenglab.xmu.edu.cn/llm/` |
| OpenAI-compatible API base | `https://chenglab.xmu.edu.cn/llm/v1` |
| API key | Your personal key, generated in the service portal |
| Model ID | Copy the exact **Model Name** from **AI Hub** in the portal |

The gateway root and API base serve different client settings. Claude Code uses the gateway root; the Codex and OpenCode examples use the OpenAI-compatible API base. Follow the settings for your chosen client in the [installation guide]({{ '/wiki/ai-coding-tools/' | relative_url }}).

### Group members

Students who attend Cheng Lab's online onboarding and complete the needs questionnaire receive an activation email with their account email and initial budget. Check that email for the quota and its effective dates. Contact the AI4EC-Lab team if you need additional credits.

### External-user application / 外部用户账号申请 {#external-user-application}

External users can request an account through the application form below. Open the form directly or scan the QR code.

外部用户可通过下方申请表申请账号。点击链接或扫描二维码即可填写。

[**Apply for an external-user account / 申请外部用户账号**](https://qa5a4u6nl82.feishu.cn/share/base/shrcnnIO7Ye1ruylZSlzKVX1wH4?from=navigation)

<figure>
  <a href="https://qa5a4u6nl82.feishu.cn/share/base/shrcnnIO7Ye1ruylZSlzKVX1wH4?from=navigation" aria-label="Open the external-user account application form / 打开外部用户账号申请表">
    <img src="{{ '/images/token-plan/external-user-application.png' | relative_url }}" alt="QR code for the external-user account application form / 外部用户账号申请表二维码" width="220" height="220" style="display: block; box-sizing: content-box; max-width: calc(100% - 32px); padding: 16px; background: #fff;">
  </a>
  <figcaption>Scan to apply for an external-user account. / 扫码申请外部用户账号。</figcaption>
</figure>

### Using your account

Generate an API key in the portal and keep it private. Credits are intended for academic research, learning, and project development. Do not include keys in shared documents or public repositories. For connection problems, consult the [Cheng Group wiki FAQ](https://wiki.cheng-group.net/wiki/token_plan/faq/); for account or budget requests, contact the AI4EC-Lab team.

## AI coding tools {#coding-tools}

**Codex is the tool we use most often.** Our [AI Coding Tools: Installation and Setup]({{ '/wiki/ai-coding-tools/' | relative_url }}) page provides installation commands, Token Plan configuration examples, and a first-use check for all three tools.

### Codex {#codex}

Use Codex from your project directory to understand code, make changes, and run local development tools. Start with the [Codex installation and gateway setup]({{ '/wiki/ai-coding-tools/' | relative_url }}#codex).

### Claude Code {#claude-code}

Claude Code remains available for terminal-based coding and automation. See the [Claude Code installation and gateway setup]({{ '/wiki/ai-coding-tools/' | relative_url }}#claude-code).

### OpenCode {#opencode}

OpenCode offers a terminal interface with configurable model providers. See the [OpenCode installation and gateway setup]({{ '/wiki/ai-coding-tools/' | relative_url }}#opencode).

## Managing configurations {#cc-switch}

Keep the gateway URL, credential, and model selection together when switching between providers. If you already use a configuration manager such as cc-switch, save a separate Token Plan configuration and verify the active settings after switching. The [installation guide]({{ '/wiki/ai-coding-tools/' | relative_url }}) shows each client's configuration directly.

After changing a configuration, restart the client. Shell environment changes apply to newly launched processes; an editor already running will not automatically receive them.

## VS Code extensions {#vscode}

Continue, Cline, and Roo Code can connect to compatible model endpoints from VS Code. Install your chosen extension from the Extensions panel, then open its provider settings and enter:

1. The provider protocol supported by the selected model and extension, such as OpenAI-compatible or Anthropic-compatible.
2. The matching gateway base URL from the table above.
3. Your personal Token Plan API key.
4. The exact **Model Name** shown in the portal's **AI Hub**.

Save the settings and send a short test message. If a request fails, check the protocol, URL, and model ID together. Configuration interfaces vary by extension and version; use its current provider settings rather than copying an older configuration file unchanged.

[AI Coding Tools: Installation and Setup]({{ '/wiki/ai-coding-tools/' | relative_url }}) · [Back to Wiki]({{ '/wiki/' | relative_url }})
