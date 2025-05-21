/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from "react";
import { Mention } from "./plugins/MentionsPlugin";
export type EditorPluginConfig = {
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
export interface InnerEditorProps {
    plugins?: EditorPluginConfig;
    fetchMentions?: (query: string) => Promise<Mention[]>;
    onMentionSelect?: (mention: Mention) => void;
    renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
    placeholder?: string;
    readOnly?: boolean;
}
export default function LexicalEditorInner({ plugins, fetchMentions, onMentionSelect, renderMentionOption, placeholder: customPlaceholder, readOnly, }: InnerEditorProps): import("react/jsx-runtime").JSX.Element;
