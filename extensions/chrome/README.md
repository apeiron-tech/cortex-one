# Cortex One Chrome Extension

The Cortex One chrome extension lets you research, create, and automate with LLMs powered by your team's unique knowledge. Just hit Ctrl + O on Mac or Alt + O on Windows to instantly access Cortex One in your browser:

💡 Know what your company knows, instantly with the Cortex One sidebar
💬 Chat: Cortex One provides a natural language chat interface as the main way of interacting with the features.
🌎 Internal Search: Ask questions and get answers from all your team's knowledge, powered by Cortex One's 50+ connectors to all the tools your team uses
🚀 With a simple Ctrl + O on Mac or Alt + O on Windows - instantly summarize information from any work application

⚡️ Get quick access to the work resources you need.
🆕 Cortex One new tab page puts all of your company’s knowledge at your fingertips
🤖 Access custom AI Agents for unique use cases, and give them access to tools to take action.

—

Cortex One connects with dozens of popular workplace apps like Google Drive, Jira, Confluence, Slack, and more. Use this extension if you have an account created by your team admin.

## Installation

Open `chrome://extensions`, turn on **Developer mode**, choose **Load unpacked**, and select this folder. To distribute the extension to your team, publish your own build to the Chrome Web Store.

## Enterprise configuration (managed policy)

Admins can pre-set and lock settings with Chrome's extension policy
(`ExtensionSettings` / "Managed storage" in Google Admin, or the
`3rdparty.extensions.<id>` policy on Windows/macOS/Linux). Settings set by
policy are read-only in the extension UI. Supported keys (see
`managed_schema.json`):

| Key                          | Type    | Description                                     |
| ---------------------------- | ------- | ----------------------------------------------- |
| `onyxExtensionDomain`        | string  | Root URL of your Cortex One instance                  |
| `onyxExtensionDefaultNewTab` | boolean | Force the "Use Cortex One as new tab page" toggle     |

Example (Linux, `/etc/opt/chrome/policies/managed/onyx.json`; the Chrome Web
Store extension ID is `dacfbnglakogghooelgjflkhjcdbemia`):

```json
{
  "3rdparty": {
    "extensions": {
      "dacfbnglakogghooelgjflkhjcdbemia": {
        "onyxExtensionDomain": "https://onyx.example.com",
        "onyxExtensionDefaultNewTab": false
      }
    }
  }
}
```

Trailing slashes on `onyxExtensionDomain` are stripped automatically.

## Development

- Load unpacked extension in your browser
- Modify files in `src` directory
- Refresh extension in Chrome

### Testing managed policy locally

Use the ID shown on the unpacked extension's card in `chrome://extensions`
(it differs from the Web Store ID).

Linux: write the JSON above to `/etc/opt/chrome/policies/managed/onyx.json`.

macOS: Chrome only reads extension policy from managed preferences, so
`defaults write` is not enough. Write the plist with `plutil`:

```sh
P="/Library/Managed Preferences/$USER/com.google.Chrome.extensions.<id>.plist"
sudo plutil -create xml1 "$P"
sudo plutil -insert onyxExtensionDomain -string "https://onyx.example.com" "$P"
sudo plutil -insert onyxExtensionDefaultNewTab -bool false "$P"
sudo killall cfprefsd
```

Then quit and relaunch Chrome, click "Reload policies" on `chrome://policy`,
and reload the extension. Remove the file and restart Chrome to undo.

## Contributing

Submit issues or pull requests for improvements
