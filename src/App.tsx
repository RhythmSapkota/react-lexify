import { buildImportMap } from "@/utils/editorConfig";
import { JSX } from "react";
import { useSettings } from "./context/SettingsContext";
import "@/rs-richeditor.css"
import Editor from "./Editor";

function App(): JSX.Element {
  const {
    settings: { isCollab, emptyEditor, measureTypingPerf },
  } = useSettings();

  return (
    <>
      <div className="editor-shell">
        <Editor
          initialConfig={{
            namespace: "Playground",
            html: { import: buildImportMap() },
            editorState: isCollab ? null : emptyEditor ? undefined : undefined,
          }}
          plugins={{
            richText: true,
            toolbar: true,
            table: { enabled: true },
            mentions: { enabled: true },
            emojis: true,
            comment: { enabled: true },
            autoFocus: true,
          }}
        />
      </div>
    </>
  );
}

export default function PlaygroundApp() {
  return <App />;
}
