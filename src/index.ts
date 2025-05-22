// Default export
import Editor from "@/Editor";
export default Editor;

// Named exports
export { default as Editor } from "@/Editor";
export type { EditorWrapperProps as EditorProps } from "@/Editor";
export type { Mention } from "@/plugins/MentionsPlugin";
export type { EditorPluginConfig } from "@/EditorInner";
