# rs-richeditor

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Made with Lexical](https://img.shields.io/badge/Made%20with-Lexical-blue)](https://lexical.dev/)
[![npm version](https://img.shields.io/npm/v/rs-richeditor.svg)](https://www.npmjs.com/package/rs-richeditor)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/rhythmsapkota/rs-richeditor/pulls)

A powerful, extensible, and modular rich text editor built with [Lexical](https://lexical.dev/) and [React](https://reactjs.org/). `rs-richeditor` is designed for developers who need a flexible editor that can be easily customized with plugins, collaborative features, and advanced content types.

> ⚠️ **Important Note:**  
> This editor is built on top of [Lexical](https://lexical.dev/), which is an actively developed and evolving library maintained by Meta. As such, **breaking changes** or frequent updates may occur in Lexical’s core or plugin APIs.  
> We are committed to keeping `rs-richeditor` in sync with Lexical's latest stable versions and **will try to publish updates as soon as possible** to maintain compatibility and stability.

<!-- ![rs-richeditor demo](https://path-to-your-demo-gif.gif) -->

## Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Basic Usage](#%EF%B8%8F-basic-usage)
- [Editor Props](#%EF%B8%8F-editor-props)
- [Plugin Configuration](#-plugin-configuration)
  - [Core Plugins](#core-plugins)
  - [Rich Text Specific Plugins](#rich-text-specific-plugins)
  - [Content Type Plugins](#content-type-plugins)
  - [Interactive Plugins](#interactive-plugins)
  - [Collaborative Editing](#collaborative-editing)
  - [UI & Behavior Plugins](#ui--behavior-plugins)
  - [Floating UI Plugins](#floating-ui-plugins)
- [Advanced Configuration](#-advanced-configuration)
- [Examples](#-examples)
- [TypeScript Support](#-typescript-support)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

- 📝 Rich text and plain text editing
- 🔌 Plugin-based configuration (use only what you need)
- 🧩 Modular plugins for mentions, emojis, checklists, tables, and embeds
- 🔄 Real-time collaborative editing with [Yjs](https://github.com/yjs/yjs) + WebSocket
- 🧠 Slash command autocomplete, AI-style shortcuts, and dynamic inputs
- 🎨 Embedded drawing support via [Excalidraw](https://excalidraw.com/)
- 📑 Table support with advanced features (resizing, merging, coloring)
- 🎥 Embed support for YouTube, Twitter, Figma, and more
- 🔧 Customizable editor theme and plugin behaviors
- 💬 Comment system support (optional)
- 💯 Written in **TypeScript** with full typings for all configs

## 📦 Installation

```bash
npm install rs-richeditor
# or
yarn add rs-richeditor
# or
pnpm add rs-richeditor
```

Make sure you also have:

```bash
npm install react react-dom
```

## 🛠️ Basic Usage

```tsx
import React from "react";
import Editor from "rs-richeditor";

export default function MyEditor() {
  return (
    <Editor
      plugins={{
        richText: true,
        toolbar: true,
        table: { enabled: true },
        mentions: {
          enabled: true,
          renderMentionOption: (mention, selected) => (
            <div style={{ background: selected ? "#eee" : "transparent" }}>
              @{mention.meta?.name || mention.displayName}
            </div>
          ),
        },
        emojis: true,
        autoFocus: true,
      }}
    />
  );
}
```

## ⚙️ Editor Props

The `Editor` component accepts the following props:

```ts
interface EditorProps {
  initialConfig?: Partial<LexicalComposerInitialConfig>;
  plugins?: EditorPluginConfig;
  placeholder?: string;
  readOnly?: boolean;
  fetchMentions?: (query: string) => Promise<Mention[]>;
  onMentionSelect?: (mention: Mention) => void;
  renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
}
```

| Prop                  | Type                                                     | Description                                                                            |
| --------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `initialConfig`       | `Partial<LexicalComposerInitialConfig>`                  | Partial configuration for the Lexical composer.                                        |
| `plugins`             | `EditorPluginConfig`                                     | Configuration for all the plugins. See [Plugin Configuration](#-plugin-configuration). |
| `placeholder`         | `string`                                                 | Placeholder text for the editor when empty.                                            |
| `readOnly`            | `boolean`                                                | Makes the editor read-only if set to `true`.                                           |
| `fetchMentions`       | `(query: string) => Promise<Mention[]>`                  | Function to fetch mention data based on query.                                         |
| `onMentionSelect`     | `(mention: Mention) => void`                             | Callback function when a mention is selected.                                          |
| `renderMentionOption` | `(mention: Mention, isSelected: boolean) => JSX.Element` | Custom render function for mention options.                                            |

## 🔌 Plugin Configuration

The `EditorPluginConfig` interface defines all available plugin options. Below is a detailed breakdown of each plugin category and available configuration.

### Core Plugins

- `autoFocus`: `boolean` - Enables auto-focus on the editor when it mounts. Defaults to `false`.
  ```tsx
  <Editor plugins={{ autoFocus: true }} />
  ```
- `clearEditor`: `boolean` - Adds a clear editor button. Defaults to `false`.
  ```tsx
  <Editor plugins={{ clearEditor: true }} />
  ```
- `history`: `boolean` - Enables undo/redo history. Defaults to `false`.
  ```tsx
  <Editor plugins={{ history: true }} />
  ```
- `selectionAlwaysOnDisplay`: `boolean` - Keeps the selection visible. Defaults to `false`.
  ```tsx
  <Editor plugins={{ selectionAlwaysOnDisplay: true }} />
  ```

### Rich Text Specific Plugins

- `richText`: `boolean` - Enables rich text editing mode. Required for most rich text features. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true }} />
  ```
- `toolbar`: `boolean` - Displays the toolbar. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, toolbar: true }} />
  ```
- `shortcuts`: `boolean` - Enables keyboard shortcuts. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, shortcuts: true }} />
  ```
- `markdownShortcut`: `boolean` - Enables markdown shortcuts. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, markdownShortcut: true }} />
  ```
- `codeHighlight`: `boolean` - Enables code syntax highlighting. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, codeHighlight: true }} />
  ```
- `list`: `boolean` - Enables lists (bulleted and numbered). Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, list: true }} />
  ```
- `checkList`: `boolean` - Enables checklists. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, checkList: true }} />
  ```
- `table`: `object` - Enables tables. Requires `richText: true`. Defaults to `{ enabled: false }`.
  - `enabled`: `boolean` - Enables table functionality.
  - `cellMerge`: `boolean` - Enables cell merging.
  - `cellBackgroundColor`: `boolean` - Enables cell background color.
  - `horizontalScroll`: `boolean` - Enables horizontal scrolling for tables.
  ```tsx
  <Editor
    plugins={{
      richText: true,
      table: {
        enabled: true,
        cellMerge: true,
        cellBackgroundColor: true,
        horizontalScroll: true,
      },
    }}
  />
  ```
- `tableCellResizer`: `boolean` - Enables table cell resizing. Requires `table: { enabled: true }`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{
      richText: true,
      table: { enabled: true },
      tableCellResizer: true,
    }}
  />
  ```
- `horizontalRule`: `boolean` - Enables horizontal rules. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, horizontalRule: true }} />
  ```
- `tabFocus`: `boolean` - Enables tab focus. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, tabFocus: true }} />
  ```
- `tabIndentation`: `boolean` - Enables tab indentation. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, tabIndentation: true }} />
  ```

### Content Type Plugins

- `images`: `boolean` - Enables image support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, images: true }} />
  ```
- `inlineImage`: `boolean` - Enables inline image support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, inlineImage: true }} />
  ```
- `link`: `object` - Enables link support. Requires `richText: true`. Defaults to `{ enabled: false }`.
  - `enabled`: `boolean` - Enables link functionality.
  - `hasAttributes`: `boolean` - Enables link attributes.
  ```tsx
  <Editor
    plugins={{ richText: true, link: { enabled: true, hasAttributes: true } }}
  />
  ```
- `poll`: `boolean` - Enables poll support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, poll: true }} />
  ```
- `twitter`: `boolean` - Enables Twitter embed support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, twitter: true }} />
  ```
- `youtube`: `boolean` - Enables YouTube embed support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, youtube: true }} />
  ```
- `figma`: `boolean` - Enables Figma embed support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, figma: true }} />
  ```
- `clickableLink`: `boolean` - Enables clickable links. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, clickableLink: true }} />
  ```
- `equations`: `boolean` - Enables equation support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, equations: true }} />
  ```
- `excalidraw`: `boolean` - Enables Excalidraw support. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, excalidraw: true }} />
  ```
- `collapsible`: `boolean` - Enables collapsible sections. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, collapsible: true }} />
  ```
- `pageBreak`: `boolean` - Enables page breaks. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, pageBreak: true }} />
  ```
- `layout`: `boolean` - Enables layout features. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, layout: true }} />
  ```

### Interactive Plugins

- `dragDropPaste`: `boolean` - Enables drag and drop and paste functionality. Defaults to `false`.
  ```tsx
  <Editor plugins={{ dragDropPaste: true }} />
  ```
- `componentPicker`: `boolean` - Enables component picker. Defaults to `false`.
  ```tsx
  <Editor plugins={{ componentPicker: true }} />
  ```
- `emojiPicker`: `boolean` - Enables emoji picker. Defaults to `false`.
  ```tsx
  <Editor plugins={{ emojiPicker: true }} />
  ```
- `autoEmbed`: `boolean` - Enables auto-embedding of links. Defaults to `false`.
  ```tsx
  <Editor plugins={{ autoEmbed: true }} />
  ```
- `mentions`: `object` - Enables mentions.

  - `enabled`: `boolean` - Enables mentions functionality.
  - `fetchMentions`: `(query: string) => Promise<Mention[]>` - Function to fetch mention data.
  - `onMentionSelect`: `(mention: Mention) => void` - Callback when a mention is selected.
  - `renderMentionOption`: `(mention: Mention, isSelected: boolean) => JSX.Element` - Custom rendering for mention options.

  ```tsx
  <Editor
    plugins={{
      mentions: {
        enabled: true,
        fetchMentions: async (query) => {
          // Implement your mention fetching logic here
          const response = await fetch(`/api/users?search=${query}`);
          return response.json();
        },
        onMentionSelect: (mention) => {
          console.log("Mention selected:", mention);
        },
        renderMentionOption: (mention, isSelected) => (
          <div
            style={{
              backgroundColor: isSelected ? "#eee" : "transparent",
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={mention.meta.imageUrl || "/default-avatar.png"}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              />
              <div>
                <div style={{ fontWeight: "bold" }}>{mention.meta.name}</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  {mention.meta.email}
                </div>
              </div>
            </div>
          </div>
        ),
      },
    }}
  />
  ```

- `emojis`: `boolean` - Enables emojis. Defaults to `false`.
  ```tsx
  <Editor plugins={{ emojis: true }} />
  ```
- `hashtag`: `boolean` - Enables hashtags. Defaults to `false`.
  ```tsx
  <Editor plugins={{ hashtag: true }} />
  ```
- `keywords`: `boolean` - Enables keywords. Defaults to `false`.
  ```tsx
  <Editor plugins={{ keywords: true }} />
  ```
- `speechToText`: `boolean` - Enables speech-to-text. Defaults to `false`.
  ```tsx
  <Editor plugins={{ speechToText: true }} />
  ```
- `autoLink`: `boolean` - Enables auto-linking. Defaults to `false`.
  ```tsx
  <Editor plugins={{ autoLink: true }} />
  ```

### Collaborative Editing

- `collaboration`: `object` - Enables collaborative editing.
  - `enabled`: `boolean` - Enables collaboration functionality.
  - `providerFactory`: `() => any` - Factory function to create a collaboration provider.
  ```tsx
  <Editor
    plugins={{
      collaboration: {
        enabled: true,
        providerFactory: () => {
          // Example WebSocket provider setup
          const provider = new WebsocketProvider(
            "wss://your-collaboration-server.com",
            "document-id",
            yourYjsDocument
          );
          return provider;
        },
      },
    }}
  />
  ```
- `comment`: `object` - Enables commenting.
  - `enabled`: `boolean` - Enables comment functionality.
  - `providerFactory`: `() => any` - Factory function to create a comment provider.
  ```tsx
  <Editor
    plugins={{
      comment: {
        enabled: true,
        providerFactory: () => {
          // Implement your comment provider factory here
          return {
            addComment: (thread, message) => {
              // Your implementation
            },
            resolveComment: (threadId) => {
              // Your implementation
            },
          };
        },
      },
    }}
  />
  ```

### UI & Behavior Plugins

- `maxLength`: `object` - Sets a maximum length for the editor content.
  - `enabled`: `boolean` - Enables the max length restriction.
  - `length`: `number` - The maximum allowed length.
  ```tsx
  <Editor plugins={{ maxLength: { enabled: true, length: 200 } }} />
  ```
- `characterLimit`: `object` - Sets a character limit for the editor content.
  - `enabled`: `boolean` - Enables the character limit.
  - `charset`: `"UTF-8" | "UTF-16"` - The character set to use.
  - `maxLength`: `number` - The maximum allowed character length.
  ```tsx
  <Editor
    plugins={{
      characterLimit: { enabled: true, maxLength: 100, charset: "UTF-8" },
    }}
  />
  ```
- `autocomplete`: `boolean` - Enables autocomplete functionality. Defaults to `false`.
  ```tsx
  <Editor plugins={{ autocomplete: true }} />
  ```
- `treeView`: `boolean` - Enables a tree view of the editor content. Defaults to `false`.
  ```tsx
  <Editor plugins={{ treeView: true }} />
  ```
- `tableOfContents`: `boolean` - Enables a table of contents. Defaults to `false`.
  ```tsx
  <Editor plugins={{ tableOfContents: true }} />
  ```
- `contextMenu`: `boolean` - Enables a context menu. Defaults to `false`.
  ```tsx
  <Editor plugins={{ contextMenu: true }} />
  ```
- `specialText`: `boolean` - Enables special text handling. Defaults to `false`.
  ```tsx
  <Editor plugins={{ specialText: true }} />
  ```
- `actions`: `object` - Enables actions.
  - `enabled`: `boolean` - Enables actions functionality.
  - `preserveNewLinesInMarkdown`: `boolean` - Preserves new lines in markdown.
  ```tsx
  <Editor
    plugins={{ actions: { enabled: true, preserveNewLinesInMarkdown: true } }}
  />
  ```

### Floating UI Plugins

- `floatingLinkEditor`: `boolean` - Enables the floating link editor. Requires `richText: true` and `link: { enabled: true }`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{
      richText: true,
      link: { enabled: true },
      floatingLinkEditor: true,
    }}
  />
  ```
- `floatingTextFormatToolbar`: `boolean` - Enables the floating text format toolbar. Requires `richText: true` and `toolbar: true`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{ richText: true, toolbar: true, floatingTextFormatToolbar: true }}
  />
  ```
- `draggableBlock`: `boolean` - Enables draggable blocks. Requires `richText: true`. Defaults to `false`.
  ```tsx
  <Editor plugins={{ richText: true, draggableBlock: true }} />
  ```
- `codeActionMenu`: `boolean` - Enables the code action menu. Requires `richText: true` and `codeHighlight: true`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{ richText: true, codeHighlight: true, codeActionMenu: true }}
  />
  ```
- `tableHoverActions`: `boolean` - Enables table hover actions. Requires `richText: true` and `table: { enabled: true }`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{
      richText: true,
      table: { enabled: true },
      tableHoverActions: true,
    }}
  />
  ```
- `tableCellActionMenu`: `boolean` - Enables the table cell action menu. Requires `richText: true` and `table: { enabled: true }`. Defaults to `false`.
  ```tsx
  <Editor
    plugins={{
      richText: true,
      table: { enabled: true },
      tableCellActionMenu: true,
    }}
  />
  ```

## 🧩 Advanced Configuration

### Full Config Example

Below is a comprehensive example showing most of the available configuration options:

```tsx
import React from "react";
import Editor from "rs-richeditor";

export default function FullFeaturedEditor() {
  return (
    <Editor
      placeholder="Write something amazing..."
      initialConfig={{
        namespace: "MyAdvancedEditor",
        theme: {
          // Your custom theme
        },
        onError: (error) => {
          console.error("Editor error:", error);
        },
      }}
      plugins={{
        // Core plugins
        autoFocus: true,
        clearEditor: true,
        history: true,
        selectionAlwaysOnDisplay: true,

        // Rich text plugins
        richText: true,
        toolbar: true,
        shortcuts: true,
        markdownShortcut: true,
        codeHighlight: true,
        list: true,
        checkList: true,

        // Table features
        table: {
          enabled: true,
          cellMerge: true,
          cellBackgroundColor: true,
          horizontalScroll: true,
        },
        tableCellResizer: true,

        // More rich text features
        horizontalRule: true,
        tabFocus: true,
        tabIndentation: true,

        // Content types
        images: true,
        inlineImage: true,
        link: {
          enabled: true,
          hasAttributes: true,
        },
        poll: true,
        twitter: true,
        youtube: true,
        figma: true,
        clickableLink: true,
        equations: true,
        excalidraw: true,
        collapsible: true,
        pageBreak: true,
        layout: true,

        // Interactive plugins
        dragDropPaste: true,
        componentPicker: true,
        emojiPicker: true,
        autoEmbed: true,
        mentions: {
          enabled: true,
          fetchMentions: async (query) => {
            const response = await fetch(`/api/users?search=${query}`);
            return response.json();
          },
        },
        emojis: true,
        hashtag: true,
        keywords: true,
        speechToText: true,
        autoLink: true,

        // Collaborative features
        collaboration: {
          enabled: true,
          providerFactory: () => {
            // Your collaboration provider setup
            return null; // Replace with actual provider
          },
        },
        comment: {
          enabled: true,
          providerFactory: () => {
            // Your comment provider setup
            return null; // Replace with actual provider
          },
        },

        // UI & behavior
        maxLength: {
          enabled: true,
          length: 5000,
        },
        characterLimit: {
          enabled: false,
        },
        autocomplete: true,
        treeView: true,
        tableOfContents: true,
        contextMenu: true,
        specialText: true,
        actions: {
          enabled: true,
          preserveNewLinesInMarkdown: true,
        },

        // Floating UI
        floatingLinkEditor: true,
        floatingTextFormatToolbar: true,
        draggableBlock: true,
        codeActionMenu: true,
        tableHoverActions: true,
        tableCellActionMenu: true,
      }}
    />
  );
}
```

### Mention Type Definition

```ts
interface Mention {
  id: string;
  displayName: string;
  meta?: {
    name?: string;
    email?: string;
    imageUrl?: string;
    phoneNumber?: number;
    [key: string]: any; // Additional custom properties
  };
  [key: string]: any; // Any additional top-level properties
}
```

## 📝 Examples

### Basic Rich Text Editor

```tsx
import React from "react";
import Editor from "rs-richeditor";

export default function BasicEditor() {
  return (
    <Editor
      placeholder="Start typing..."
      plugins={{
        richText: true,
        toolbar: true,
        history: true,
        autoFocus: true,
      }}
    />
  );
}
```

### Collaborative Editor

```tsx
import React from "react";
import Editor from "rs-richeditor";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";

export default function CollaborativeEditor() {
  const setupCollaboration = () => {
    const doc = new Y.Doc();
    const provider = new WebsocketProvider(
      "wss://your-collaboration-server.com",
      "document-123",
      doc
    );

    return provider;
  };

  return (
    <Editor
      placeholder="Collaborate in real-time..."
      plugins={{
        richText: true,
        toolbar: true,
        history: true,
        collaboration: {
          enabled: true,
          providerFactory: setupCollaboration,
        },
      }}
    />
  );
}
```

### Editor with Social Media Features

```tsx
import React from "react";
import Editor from "rs-richeditor";

export default function SocialEditor() {
  return (
    <Editor
      placeholder="What's on your mind?"
      plugins={{
        richText: true,
        toolbar: true,
        mentions: {
          enabled: true,
          fetchMentions: async (query) => {
            // Fetch users from your API
            return [
              {
                id: "1",
                displayName: "John Doe",
                meta: {
                  name: "John",
                  email: "john@example.com",
                  imageUrl: "/john.jpg",
                },
              },
              {
                id: "2",
                displayName: "Jane Smith",
                meta: {
                  name: "Jane",
                  email: "jane@example.com",
                  imageUrl: "/jane.jpg",
                },
              },
            ].filter((user) =>
              user.displayName.toLowerCase().includes(query.toLowerCase())
            );
          },
        },
        hashtag: true,
        emojis: true,
        images: true,
        link: { enabled: true },
        youtube: true,
        twitter: true,
      }}
    />
  );
}
```

## 💻 TypeScript Support

The library is built with TypeScript and includes type definitions for all components and configurations:

```ts
import { Editor, EditorPluginConfig, Mention } from "rs-richeditor";
```

## 🌐 Browser Support

rs-richeditor supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

> **Disclaimer:**  
> This project (`rs-richeditor`) is built on top of [Lexical](https://lexical.dev/), an open-source framework developed and maintained by [Meta Platforms, Inc.](https://meta.com).  
> It is an **independent project not affiliated with or endorsed by Meta**.  
> Portions of the code and plugin structure are adapted from the [Lexical Playground](https://github.com/facebook/lexical/tree/main/packages/lexical-playground), which is also licensed under the MIT License.

## 👤 Author

Built and maintained by **Rhythm Sapkota**  
[GitHub Profile](https://github.com/rhythmsapkota)

Contributions, issues, and suggestions are welcome!
