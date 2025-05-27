// components/editor/Editor.tsx

import { Mention } from "@/plugins/MentionsPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { JSX } from "react";
import { SharedHistoryContext } from "./context/SharedHistoryContext";
import { ToolbarContext } from "./context/ToolbarContext";
import LexicalEditorInner, {
  EditorClassOverrides,
  EditorPluginConfig,
  InnerEditorProps,
} from "./EditorInner";
import "@excalidraw/excalidraw/index.css";
import PlaygroundNodes from "./nodes/PlaygroundNodes";
import { TableContext } from "./plugins/TablePlugin";
import PlaygroundEditorTheme from "./themes/PlaygroundEditorTheme";
import { $prepopulatedRichText, buildImportMap } from "./utils/editorConfig";
import { ToolbarStyleConfig } from "./plugins/ToolbarPlugin/toolbar-style.types";

const defaultInitialConfig = {
  namespace: "Editor",
  theme: PlaygroundEditorTheme,
  html: { import: buildImportMap() },
  nodes: [...PlaygroundNodes],
  onError: (e: Error) => {
    console.error(e);
    throw e;
  },
};

export interface EditorWrapperProps extends Omit<InnerEditorProps, "editor"> {
  initialConfig?: Partial<
    Parameters<typeof LexicalComposer>[0]["initialConfig"]
  >;
  toolbarStyle?: ToolbarStyleConfig;
  classOverrides?: EditorClassOverrides;
}

export default function Editor({
  initialConfig = {},
  plugins,
  toolbarStyle,
  classOverrides,
  ...props
}: EditorWrapperProps): JSX.Element {
  const mergedConfig = {
    ...defaultInitialConfig,
    ...initialConfig,
  };

  return (
    <div className={`editor-shell ${classOverrides?.editorShell}`}>
      <LexicalComposer initialConfig={mergedConfig}>
        <SharedHistoryContext>
          <TableContext>
            <ToolbarContext>
              <LexicalEditorInner
                plugins={plugins}
                toolbarStyle={toolbarStyle}
                classOverrides={classOverrides}
                {...props}
              />
            </ToolbarContext>
          </TableContext>
        </SharedHistoryContext>
      </LexicalComposer>
    </div>
  );
}
