// Default export: main Editor
export { default as Editor } from "@/Editor";

// Named exports
export type { EditorWrapperProps as EditorProps } from "@/Editor";
export type { Mention } from "@/plugins/MentionsPlugin";
export type { EditorPluginConfig } from "@/EditorInner";

// Optional convenience default export (for users who prefer `import Editor from 'rs-richeditor'`)
import Editor from "@/Editor";
export default Editor;
