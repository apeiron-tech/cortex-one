<a name="readme-top"></a>

<h2 align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="web/public/logotype-dark.png" />
        <img width="40%" alt="Cortex One Development" src="web/public/logotype.png" />
    </picture>
</h2>

<p align="center">
    <a href="LICENSE" target="_blank">
        <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License" />
    </a>
</p>

# Cortex One Development

An Apeiron AI Platform.

> "LLMs know about everything public, but what if it could also know what's going on in our team? I want an AI coworker, not an AI new hire."

**Cortex One Development** is the knowledge and context layer for your team and AI agents.

Cortex One Development connects to your application to index and surface knowledge from 50+ applications while protecting your data sovereignty through flexible self-hosted deployments.

Beyond search, Cortex One Development enables LLMs with advanced features like web search, sandboxes, skills, and more.


> [!TIP]
> Run the stack locally with Docker Compose:
> ```
> cd deployment/docker_compose && docker compose up -d
> ```

![Cortex One Development chat](docs/assets/onyx-chat-use-cases.png)

---

## How does Cortex One Development work

Cortex One Development creates a representation of knowledge across all connected sources. It pulls data along with metadata, permissions, etc. and ingests it so that the information is easily accessible for downstream use cases.

Compared to MCP based searches and index-free approaches, Cortex One Development provides a more reliable, low latency, and low cost context for any given query whether it's a simple keyword query or a complex research task.

Instead of an agent coordinating and iteratively searching dozens of MCP and burning many thousands of tokens, Cortex One Development fetches the context across its internal representation instantly and filters down to only the most relevant ground truth documents.

## ⭐ Features

- **🔍 Agentic RAG:** Get best in class search and answer quality based on hybrid index + a custom agent harness tuned for information retrieval.
- **🔬 Deep Research:** Get in depth reports with a multi-step research flow.
- **🤖 Custom Agents:** Build AI Agents with unique subsets of knowledge, custom instructions, and the ability to take actions.
- **🌍 Web Search:** Augment internal knowledge with live web search.
  - Supports Serper, Google PSE, Brave, SearXNG, and others.
  - Comes with an in house web crawler and support for Firecrawl/Exa.
- **▶️ External Actions & MCP:** Let Cortex One Development agents take actions in external applications to complete tasks end to end.
- **💻 Secure Sandbox:** Execute code and work with intermediate artifacts in a sandbox for complex workflows.
- **📄 Artifacts:** Generate documents, graphics, and other downloadable artifacts.
- **🎙️ Voice Mode:** Interact with Cortex One Development via text-to-speech and speech-to-text.

Cortex One Development supports all major LLM providers, both self-hosted (like Ollama, LiteLLM, vLLM, etc.) and proprietary (like Anthropic, OpenAI, Gemini, etc.).

To learn more - check out our [upstream Onyx docs](https://docs.onyx.app/welcome)!

---

## Security and Data Processing

![Cortex One Development architecture: everything runs inside your environment](docs/assets/architecture.png)

When connecting up your organization's knowledge, it's critical that this sensitive IP is not leaked to the wrong parties both external and internal.

Cortex One Development provides an air-gappable, self-hosted deployment where the document index, database, and processing all happen within a self-contained set of services.

You can also choose a trusted embedding model and LLM provider (both of which can also run locally).

---

## Access Cortex One Development from anywhere

The same security and fine grained permissions apply no matter where the question comes from.

- **Web and desktop app** - Ask questions, interface with Cortex One Development AI agents, and everything else in the feature list above.
- **Slack and Discord bot** - Get answers directly in Slack or Discord from a bot connected to your org's knowledge.
- **MCP server** - Point Claude Code, Open Code, Codex, or any MCP client at Cortex One Development. Your AI agents get company context with the same access controls as the person running them.
- **Chrome extension** - Query Cortex One Development from any tab with context from the page, directly in Chrome.
- **Embeddable Widget** - Easily add Cortex One Development functionality to your app or website.

---

## 🚀 Deployment Modes

> Cortex One Development supports deployments in Docker, Kubernetes, Helm/Terraform and provides guides for major cloud providers.
> Detailed deployment guides found [in the upstream Onyx docs](https://docs.onyx.app/deployment/overview).

Cortex One Development supports two separate deployment options: standard and lite.

#### Standard Cortex One Development

The complete feature set of Cortex One Development which is recommended for serious users and larger teams. Additional components not included in Lite mode:
- Vector + Keyword index for RAG.
- Background containers to run job queues and workers for syncing knowledge from connectors.
- AI model inference servers to run deep learning models used during indexing and inference.
- Performance optimizations for large scale use via in memory cache (Redis) and blob store (MinIO).

#### Cortex One Development Lite

The Lite mode can be thought of as a lightweight AI Chat UI. It requires less resources (under 1GB memory) and runs a less complex stack but is not capable of indexing documents.
It is great for users who want to test out the Cortex One Development UI quickly or for teams who are only interested in the Chat UI and Agents functionalities.

---

## 🏢 Enterprise features

The codebase includes features for teams of all sizes, from individual users to large organizations. Some of them live in `ee/` directories, which carry their own licence (see Licensing):
- 👥 Collaboration: Share chats and agents with other members of your organization.
- 🔐 Single Sign On: SSO via Google OAuth, OIDC, or SAML. Group syncing and user provisioning via SCIM.
- 🛡️ Role Based Access Control: RBAC for sensitive resources like access to agents, actions, etc.
- 📊 Analytics: Usage graphs broken down by teams, LLMs, or agents.
- 🕵️ Query History: Audit usage to ensure safe adoption of AI in your organization.
- 💻 Custom code: Run custom code to remove PII, reject sensitive queries, or to run custom analysis.
- 🎨 Whitelabeling: Customize the look and feel of Cortex One Development with custom naming, icons, banners, and more.

## 📚 Licensing

This repository has two licence scopes:

- Everything outside `ee/` directories is available under the MIT license and covers the core features for RAG, AI Chat, Agents, and Actions.
- Code in `ee/` directories (extra features aimed at larger organizations) is covered by the Onyx Enterprise License in those directories. Using it requires a valid Onyx Enterprise License.

## 💡 Contributing

Looking to contribute? Please check out the [Contribution Guide](CONTRIBUTING.md) for more details.

---

## Attribution and licence

Cortex One Development is built on [Onyx](https://github.com/onyx-dot-app/onyx), an open-source project released under the MIT licence (Copyright (c) 2023-present DanswerAI, Inc.). The original copyright and licence notices stay in [`LICENSE`](LICENSE). Code in `ee/` directories is covered by the Onyx Enterprise License in those directories.
