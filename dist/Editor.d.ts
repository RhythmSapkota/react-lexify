import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { JSX } from "react";
import { InnerEditorProps } from "./EditorInner";
export interface EditorWrapperProps extends Omit<InnerEditorProps, "editor"> {
    initialConfig?: Partial<Parameters<typeof LexicalComposer>[0]["initialConfig"]>;
}
export default function Editor({ initialConfig, plugins, ...props }: EditorWrapperProps): JSX.Element;
