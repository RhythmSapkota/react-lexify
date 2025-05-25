import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { JSX } from 'react';
import { EditorState } from 'lexical';

interface Mention {
    id: string;
    displayName: string;
    meta: {
        id: string;
        name: string;
        email: string;
        imageUrl: string;
        phoneNumber: number;
    };
}

type ToolbarButtonKey = "bold" | "italic" | "underline" | "code" | "link" | "strikethrough" | "subscript" | "superscript" | "highlight" | "clearFormatting" | "undo" | "redo" | "insertCodeBlock" | "insertLink" | "lowercase" | "uppercase" | "capitalize" | "fontColor" | "bgColor" | "insert" | "blockControls" | "alignment" | "fontFamily" | "fontSize" | "moreStyles" | "horizontalRule" | "pageBreak" | "image" | "inlineImage" | "gif" | "excalidraw" | "table" | "poll" | "columns" | "equation" | "sticky" | "collapsible" | "fontSizeIncrease" | "fontSizeDecrease";
type ToolbarDropdownKey = "paragraph" | "h1" | "h2" | "h3" | "bullet" | "number" | "check" | "quote" | "code" | "leftAlign" | "centerAlign" | "rightAlign" | "justifyAlign" | "startAlign" | "endAlign" | "outdent" | "indent";
type ClassNameOverride = string | ((defaultClass: string) => string);
type ToolbarStyleConfig = {
    rootClass?: ClassNameOverride;
    inputClasses?: Partial<Record<"fontSizeInput", ClassNameOverride>>;
    buttonClasses?: Partial<Record<ToolbarButtonKey, ClassNameOverride>>;
    iconClasses?: Partial<Record<ToolbarButtonKey | ToolbarDropdownKey, ClassNameOverride>>;
    dropdownItemClasses?: Partial<Record<ToolbarDropdownKey, ClassNameOverride>>;
    labelOverrides?: Partial<Record<ToolbarDropdownKey, string>>;
};

type EditorPluginConfig = {
    autoFocus?: boolean;
    clearEditor?: boolean;
    history?: boolean;
    selectionAlwaysOnDisplay?: boolean;
    richText?: boolean;
    toolbar?: boolean;
    shortcuts?: boolean;
    markdownShortcut?: boolean;
    codeHighlight?: boolean;
    list?: boolean;
    checkList?: boolean;
    table?: {
        enabled: boolean;
        cellMerge?: boolean;
        cellBackgroundColor?: boolean;
        horizontalScroll?: boolean;
    };
    tableCellResizer?: boolean;
    horizontalRule?: boolean;
    tabFocus?: boolean;
    tabIndentation?: boolean;
    images?: boolean;
    inlineImage?: boolean;
    link?: {
        enabled: boolean;
        hasAttributes?: boolean;
    };
    poll?: boolean;
    twitter?: boolean;
    youtube?: boolean;
    figma?: boolean;
    clickableLink?: boolean;
    equations?: boolean;
    excalidraw?: boolean;
    collapsible?: boolean;
    pageBreak?: boolean;
    layout?: boolean;
    dragDropPaste?: boolean;
    componentPicker?: boolean;
    emojiPicker?: boolean;
    autoEmbed?: boolean;
    mentions?: {
        enabled: boolean;
        fetchMentions?: (query: string) => Promise<Mention[]>;
        onMentionSelect?: (mention: Mention) => void;
        renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
    };
    emojis?: boolean;
    hashtag?: boolean;
    keywords?: boolean;
    speechToText?: boolean;
    autoLink?: boolean;
    collaboration?: {
        enabled: boolean;
        providerFactory?: () => any;
    };
    comment?: {
        enabled: boolean;
        providerFactory?: () => any;
    };
    maxLength?: {
        enabled: boolean;
        length?: number;
    };
    characterLimit?: {
        enabled: boolean;
        charset?: "UTF-8" | "UTF-16";
        maxLength?: number;
    };
    autocomplete?: boolean;
    treeView?: boolean;
    tableOfContents?: boolean;
    contextMenu?: boolean;
    specialText?: boolean;
    actions?: {
        enabled: boolean;
        preserveNewLinesInMarkdown?: boolean;
    };
    floatingLinkEditor?: boolean;
    floatingTextFormatToolbar?: boolean;
    draggableBlock?: boolean;
    codeActionMenu?: boolean;
    tableHoverActions?: boolean;
    tableCellActionMenu?: boolean;
};
type EditorClassOverrides = {
    editorContainer?: ClassNameOverride;
    editorScroller?: ClassNameOverride;
    editorContent?: ClassNameOverride;
    plainText?: ClassNameOverride;
    treeView?: ClassNameOverride;
    richTextPlugin?: ClassNameOverride;
};
interface InnerEditorProps {
    plugins?: EditorPluginConfig;
    initialValue?: string;
    outputFormat?: "editorState" | "htmlString";
    /** @deprecated Pass this under `plugins.mentions.fetchMentions` instead */
    fetchMentions?: (query: string) => Promise<Mention[]>;
    /** @deprecated Pass this under `plugins.mentions.onMentionSelect` instead */
    onMentionSelect?: (mention: Mention) => void;
    /** @deprecated Pass this under `plugins.mentions.renderMentionOption` instead */
    renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
    placeholder?: string;
    readOnly?: boolean;
    toolbarStyle?: ToolbarStyleConfig;
    classOverrides?: EditorClassOverrides;
    onChange?: (output: EditorState | string) => void;
}

interface EditorWrapperProps extends Omit<InnerEditorProps, "editor"> {
    initialConfig?: Partial<Parameters<typeof LexicalComposer>[0]["initialConfig"]>;
    toolbarStyle?: ToolbarStyleConfig;
    classOverrides?: EditorClassOverrides;
}
declare function Editor({ initialConfig, plugins, toolbarStyle, classOverrides, ...props }: EditorWrapperProps): JSX.Element;

export { Editor, type EditorPluginConfig, type EditorWrapperProps as EditorProps, type Mention, Editor as default };
