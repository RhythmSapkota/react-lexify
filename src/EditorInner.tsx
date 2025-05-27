/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CharacterLimitPlugin } from "@lexical/react/LexicalCharacterLimitPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin";
import { ClickableLinkPlugin } from "@lexical/react/LexicalClickableLinkPlugin";
import { CollaborationPlugin } from "@lexical/react/LexicalCollaborationPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HashtagPlugin } from "@lexical/react/LexicalHashtagPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { SelectionAlwaysOnDisplay } from "@lexical/react/LexicalSelectionAlwaysOnDisplay";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { useLexicalEditable } from "@lexical/react/useLexicalEditable";
import { CAN_USE_DOM } from "@lexical/utils";
import { useEffect, useState } from "react";

import { createWebsocketProvider } from "./collaboration";
import { useSettings } from "./context/SettingsContext";
import { useSharedHistoryContext } from "./context/SharedHistoryContext";
import AutocompletePlugin from "./plugins/AutocompletePlugin";
import AutoEmbedPlugin from "./plugins/AutoEmbedPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import CodeActionMenuPlugin from "./plugins/CodeActionMenuPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import CollapsiblePlugin from "./plugins/CollapsiblePlugin";
import ComponentPickerPlugin from "./plugins/ComponentPickerPlugin";
import ContextMenuPlugin from "./plugins/ContextMenuPlugin";
import DragDropPaste from "./plugins/DragDropPastePlugin";
import DraggableBlockPlugin from "./plugins/DraggableBlockPlugin";
import EmojiPickerPlugin from "./plugins/EmojiPickerPlugin";
import EmojisPlugin from "./plugins/EmojisPlugin";
import EquationsPlugin from "./plugins/EquationsPlugin";
import ExcalidrawPlugin from "./plugins/ExcalidrawPlugin";
import FigmaPlugin from "./plugins/FigmaPlugin";
import FloatingLinkEditorPlugin from "./plugins/FloatingLinkEditorPlugin";
import FloatingTextFormatToolbarPlugin from "./plugins/FloatingTextFormatToolbarPlugin";
import ImagesPlugin from "./plugins/ImagesPlugin";
import InlineImagePlugin from "./plugins/InlineImagePlugin";
import KeywordsPlugin from "./plugins/KeywordsPlugin";
import { LayoutPlugin } from "./plugins/LayoutPlugin/LayoutPlugin";
import LinkPlugin from "./plugins/LinkPlugin";
import MarkdownShortcutPlugin from "./plugins/MarkdownShortcutPlugin";
import { MaxLengthPlugin } from "./plugins/MaxLengthPlugin";
import MentionsPlugin, { Mention } from "./plugins/MentionsPlugin";
import PageBreakPlugin from "./plugins/PageBreakPlugin";
import PollPlugin from "./plugins/PollPlugin";
import ShortcutsPlugin from "./plugins/ShortcutsPlugin";
import SpecialTextPlugin from "./plugins/SpecialTextPlugin";
import SpeechToTextPlugin from "./plugins/SpeechToTextPlugin";
import TabFocusPlugin from "./plugins/TabFocusPlugin";
import TableCellActionMenuPlugin from "./plugins/TableActionMenuPlugin";
import TableCellResizer from "./plugins/TableCellResizer";
import TableHoverActionsPlugin from "./plugins/TableHoverActionsPlugin";
import TableOfContentsPlugin from "./plugins/TableOfContentsPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import TwitterPlugin from "./plugins/TwitterPlugin";
import YouTubePlugin from "./plugins/YouTubePlugin";
import ContentEditable from "./ui/ContentEditable";
import {
  ClassNameOverride,
  ToolbarStyleConfig,
} from "./plugins/ToolbarPlugin/toolbar-style.types";
import { resolveClass } from "./plugins/ToolbarPlugin/utils";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $getRoot, EditorState } from "lexical";

const skipCollaborationInit =
  // @ts-expect-error
  window.parent != null && window.parent.frames.right === window;

export const defaultPlugins: EditorPluginConfig = {
  // Core
  autoFocus: true,
  clearEditor: true,
  history: true,
  selectionAlwaysOnDisplay: true,

  // Rich text
  richText: true,
  toolbar: true,
  shortcuts: true,
  markdownShortcut: true,
  codeHighlight: true,
  list: true,
  checkList: true,
  table: {
    enabled: true,
    cellMerge: true,
    cellBackgroundColor: true,
    horizontalScroll: true,
  },
  tableCellResizer: true,
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

  // Interactive
  dragDropPaste: true,
  componentPicker: true,
  emojiPicker: true,
  autoEmbed: true,
  mentions: {
    enabled: true,
  },
  emojis: true,
  hashtag: true,
  keywords: true,
  speechToText: true,
  autoLink: true,

  // Collaborative
  collaboration: {
    enabled: true,
  },
  comment: {
    enabled: true,
  },

  // UI & behavior
  maxLength: {
    enabled: true,
    length: 1000,
  },
  characterLimit: {
    enabled: true,
    charset: "UTF-8",
    maxLength: 5000,
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
};

export type EditorPluginConfig = {
  // Core plugins
  autoFocus?: boolean;
  clearEditor?: boolean;
  history?: boolean;
  selectionAlwaysOnDisplay?: boolean;

  // Rich text specific plugins
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

  // Content type plugins
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

  // Interactive plugins
  dragDropPaste?: boolean;
  componentPicker?: boolean;
  emojiPicker?: boolean;
  autoEmbed?: boolean;
  mentions?: {
    enabled: boolean;
    fetchMentions?: (query: string) => Promise<Mention[]>;
    onMentionSelect?: (mention: Mention) => void;
    renderMentionOption?: (
      mention: Mention,
      isSelected: boolean
    ) => JSX.Element;
  };
  emojis?: boolean;
  hashtag?: boolean;
  keywords?: boolean;
  speechToText?: boolean;
  autoLink?: boolean;

  // Collaborative editing
  collaboration?: {
    enabled: boolean;
    providerFactory?: () => any;
  };
  comment?: {
    enabled: boolean;
    providerFactory?: () => any;
  };

  // UI & Behavior plugins
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

  // Floating UI plugins
  floatingLinkEditor?: boolean;
  floatingTextFormatToolbar?: boolean;
  draggableBlock?: boolean;
  codeActionMenu?: boolean;
  tableHoverActions?: boolean;
  tableCellActionMenu?: boolean;
};

export type EditorClassOverrides = {
  editorContainer?: ClassNameOverride;
  editorScroller?: ClassNameOverride;
  editorContent?: ClassNameOverride;
  plainText?: ClassNameOverride;
  treeView?: ClassNameOverride;
  editorShell?: ClassNameOverride;
  richTextPlugin?: ClassNameOverride;
  floatingTextFormatToolbar?: {
    container?: ClassNameOverride;
    buttons?: ClassNameOverride;
    activeButtons?: ClassNameOverride;
  };
};
export interface InnerEditorProps {
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

export default function LexicalEditorInner({
  plugins = defaultPlugins,
  fetchMentions,
  onMentionSelect,
  renderMentionOption,
  placeholder: customPlaceholder,
  readOnly,
  initialValue,
  classOverrides,
  toolbarStyle,
  outputFormat = "htmlString",
  onChange,
}: InnerEditorProps) {
  const { historyState } = useSharedHistoryContext();
  const {
    settings: {
      isCollab,
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      hasLinkAttributes,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
      shouldUseLexicalContextMenu,
      shouldPreserveNewLinesInMarkdown,
      tableCellMerge,
      tableCellBackgroundColor,
      tableHorizontalScroll,
      shouldAllowHighlightingWithBrackets,
      selectionAlwaysOnDisplay,
      listStrictIndent,
    },
  } = useSettings();

  // Merge settings with plugin config (plugin config takes precedence)
  const config = {
    // Core settings
    isRichText: plugins.richText ?? isRichText,
    isCollab: plugins.collaboration?.enabled ?? isCollab,
    showTreeView: plugins.treeView ?? showTreeView,
    showTableOfContents: plugins.tableOfContents ?? showTableOfContents,

    // Feature settings
    isAutocomplete: plugins.autocomplete ?? isAutocomplete,
    isMaxLength: plugins.maxLength?.enabled ?? isMaxLength,
    maxLength: plugins.maxLength?.length ?? 30,
    isCharLimit: plugins.characterLimit?.enabled ?? isCharLimit,
    isCharLimitUtf8: isCharLimitUtf8,
    characterLimitMaxLength: plugins.characterLimit?.maxLength ?? 5,
    hasLinkAttributes: plugins.link?.hasAttributes ?? hasLinkAttributes,
    shouldUseLexicalContextMenu:
      plugins.contextMenu ?? shouldUseLexicalContextMenu,
    shouldPreserveNewLinesInMarkdown:
      plugins.actions?.preserveNewLinesInMarkdown ??
      shouldPreserveNewLinesInMarkdown,
    shouldAllowHighlightingWithBrackets:
      plugins.specialText ?? shouldAllowHighlightingWithBrackets,

    // Table settings
    tableCellMerge: plugins.table?.cellMerge ?? tableCellMerge,
    tableCellBackgroundColor:
      plugins.table?.cellBackgroundColor ?? tableCellBackgroundColor,
    tableHorizontalScroll:
      plugins.table?.horizontalScroll ?? tableHorizontalScroll,

    // List settings
    listStrictIndent: plugins.list ?? listStrictIndent,

    // UI settings
    selectionAlwaysOnDisplay:
      plugins.selectionAlwaysOnDisplay ?? selectionAlwaysOnDisplay,
  };

  const isEditable = useLexicalEditable();
  const placeholder =
    customPlaceholder ??
    (config.isCollab
      ? "Enter some collaborative rich text..."
      : config.isRichText
      ? "Enter some rich text..."
      : "Enter some plain text...");

  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false);

  console.trace("Lexical context used here");
  const [editor] = useLexicalComposerContext();

  const [activeEditor, setActiveEditor] = useState(editor);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia("(max-width: 1025px)").matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener("resize", updateViewPortWidth);

    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  useEffect(() => {
    if (fetchMentions) {
      console.warn(
        "[LexicalEditorInner] `fetchMentions` is deprecated. Please pass it via `plugins.mentions.fetchMentions` instead."
      );
    }

    if (onMentionSelect) {
      console.warn(
        "[LexicalEditorInner] `onMentionSelect` is deprecated. Please pass it via `plugins.mentions.onMentionSelect` instead."
      );
    }

    if (renderMentionOption) {
      console.warn(
        "[LexicalEditorInner] `renderMentionOption` is deprecated. Please pass it via `plugins.mentions.renderMentionOption` instead."
      );
    }
  }, [fetchMentions, onMentionSelect, renderMentionOption]);

  useEffect(() => {
    if (!initialValue || !editor) return;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(initialValue, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.clear();
      root.append(...nodes);
    });
  }, [initialValue, editor]);

  return (
    <>
      {onChange && (
        <OnChangePlugin
          onChange={(editorState) => {
            if (outputFormat === "htmlString") {
              editorState.read(() => {
                const htmlString = $generateHtmlFromNodes(editor, null);
                onChange?.(htmlString);
              });
            } else {
              onChange?.(editorState);
            }
          }}
        />
      )}
      {config.isRichText && plugins.toolbar !== false && (
        <ToolbarPlugin
          editor={editor}
          plugins={{ ...defaultPlugins, ...plugins }}
          activeEditor={activeEditor}
          setActiveEditor={setActiveEditor}
          setIsLinkEditMode={setIsLinkEditMode}
          toolbarStyle={toolbarStyle} // ✅ Pass it here
        />
      )}

      {config.isRichText && plugins.shortcuts !== false && (
        <ShortcutsPlugin
          editor={activeEditor}
          setIsLinkEditMode={setIsLinkEditMode}
        />
      )}
      <div
        className={resolveClass(
          classOverrides?.editorContainer,
          `editor-container ${config.showTreeView ? "tree-view" : ""} ${
            !config.isRichText ? "plain-text" : ""
          }`
        )}
      >
        {config.isMaxLength && <MaxLengthPlugin maxLength={config.maxLength} />}
        {plugins.dragDropPaste !== false && <DragDropPaste />}
        {plugins.autoFocus !== false && <AutoFocusPlugin />}
        {config.selectionAlwaysOnDisplay && <SelectionAlwaysOnDisplay />}
        {plugins.clearEditor !== false && <ClearEditorPlugin />}
        {plugins.componentPicker !== false && <ComponentPickerPlugin />}
        {plugins.emojiPicker !== false && <EmojiPickerPlugin />}
        {plugins.autoEmbed !== false && <AutoEmbedPlugin />}

        {plugins.mentions?.enabled !== false && (
          <MentionsPlugin
            onMentionSelect={(mention) => {
              console.log("Selected mention:", mention);
              (plugins.mentions?.onMentionSelect || onMentionSelect)?.(mention);
            }}
            fetchMentions={
              plugins.mentions?.fetchMentions ||
              fetchMentions ||
              (async (query: string): Promise<Mention[]> => {
                console.info(
                  "You can pass your data using this callback for the mentions list",
                  query
                );
                return [
                  {
                    displayName: "Sita Poudel Example",
                    id: "1",
                    meta: {
                      id: "1",
                      name: "Sita Poudel",
                      email: "sita@gg.co",
                      imageUrl: "",
                      phoneNumber: 9862537826,
                    },
                  },
                  {
                    displayName: "Rhythm Sapkota Example",
                    id: "2",
                    meta: {
                      id: "2",
                      imageUrl: "",
                      name: "Rhythm Sapkota",
                      email: "rhythm@gg.co",
                      phoneNumber: 9867777826,
                    },
                  },
                ];
              })
            }
            renderMentionOption={
              plugins.mentions?.renderMentionOption ||
              renderMentionOption ||
              ((mention, isSelected) => (
                <div
                  className={`flex items-center gap-2 p-1 ${
                    isSelected ? "bg-blue-100" : ""
                  }`}
                >
                  <img
                    src={mention.meta.imageUrl || "/default-avatar.png"}
                    alt={mention.meta.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{mention.displayName}</p>
                    <p className="text-xs text-muted">{mention.meta.email}</p>
                  </div>
                </div>
              ))
            }
          />
        )}

        {plugins.emojis !== false && <EmojisPlugin />}
        {plugins.hashtag !== false && <HashtagPlugin />}
        {plugins.keywords !== false && <KeywordsPlugin />}
        {plugins.speechToText !== false && <SpeechToTextPlugin />}
        {plugins.autoLink !== false && <AutoLinkPlugin />}

        {config.isRichText ? (
          <>
            {config.isCollab ? (
              <CollaborationPlugin
                id="main"
                providerFactory={
                  plugins.collaboration?.providerFactory ||
                  createWebsocketProvider
                }
                shouldBootstrap={!skipCollaborationInit}
              />
            ) : (
              plugins.history !== false && (
                <HistoryPlugin externalHistoryState={historyState} />
              )
            )}
            <RichTextPlugin
              contentEditable={
                <div
                  className={resolveClass(
                    classOverrides?.editorScroller,
                    "editor-scroller"
                  )}
                >
                  <div
                    className={resolveClass(
                      classOverrides?.editorContent,
                      "editor"
                    )}
                    ref={onRef}
                  >
                    <ContentEditable placeholder={placeholder} />
                  </div>
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />

            {plugins.markdownShortcut !== false && <MarkdownShortcutPlugin />}
            {plugins.codeHighlight !== false && <CodeHighlightPlugin />}
            {plugins.list !== false && (
              <ListPlugin hasStrictIndent={config.listStrictIndent} />
            )}
            {plugins.checkList !== false && <CheckListPlugin />}

            {plugins.table?.enabled !== false && (
              <TablePlugin
                hasCellMerge={config.tableCellMerge}
                hasCellBackgroundColor={config.tableCellBackgroundColor}
                hasHorizontalScroll={config.tableHorizontalScroll}
              />
            )}

            {plugins.tableCellResizer !== false && <TableCellResizer />}
            {plugins.images !== false && <ImagesPlugin />}
            {plugins.inlineImage !== false && <InlineImagePlugin />}

            {plugins.link?.enabled !== false && (
              <LinkPlugin hasLinkAttributes={config.hasLinkAttributes} />
            )}

            {plugins.poll !== false && <PollPlugin />}
            {plugins.twitter !== false && <TwitterPlugin />}
            {plugins.youtube !== false && <YouTubePlugin />}
            {plugins.figma !== false && <FigmaPlugin />}
            {plugins.clickableLink !== false && (
              <ClickableLinkPlugin disabled={isEditable} />
            )}
            {plugins.horizontalRule !== false && <HorizontalRulePlugin />}
            {plugins.equations !== false && <EquationsPlugin />}
            {plugins.excalidraw !== false && <ExcalidrawPlugin />}
            {plugins.tabFocus !== false && <TabFocusPlugin />}
            {plugins.tabIndentation !== false && (
              <TabIndentationPlugin maxIndent={7} />
            )}
            {plugins.collapsible !== false && <CollapsiblePlugin />}
            {plugins.pageBreak !== false && <PageBreakPlugin />}
            {plugins.layout !== false && <LayoutPlugin />}

            {floatingAnchorElem && (
              <>
                {plugins.floatingLinkEditor !== false && (
                  <FloatingLinkEditorPlugin
                    anchorElem={floatingAnchorElem}
                    isLinkEditMode={isLinkEditMode}
                    setIsLinkEditMode={setIsLinkEditMode}
                  />
                )}

                {plugins.tableCellActionMenu !== false && (
                  <TableCellActionMenuPlugin
                    anchorElem={floatingAnchorElem}
                    cellMerge={true}
                  />
                )}
              </>
            )}

            {floatingAnchorElem && !isSmallWidthViewport && (
              <>
                {plugins.draggableBlock !== false && (
                  <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
                )}

                {plugins.codeActionMenu !== false && (
                  <CodeActionMenuPlugin anchorElem={floatingAnchorElem} />
                )}

                {plugins.tableHoverActions !== false && (
                  <TableHoverActionsPlugin anchorElem={floatingAnchorElem} />
                )}

                {plugins.floatingTextFormatToolbar !== false && (
                  <FloatingTextFormatToolbarPlugin
                    anchorElem={floatingAnchorElem}
                    setIsLinkEditMode={setIsLinkEditMode}
                    classNames={{
                      container:
                        classOverrides?.floatingTextFormatToolbar?.container,
                      button:
                        classOverrides?.floatingTextFormatToolbar?.buttons,
                      activeButton:
                        classOverrides?.floatingTextFormatToolbar
                          ?.activeButtons,
                    }}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <>
            <PlainTextPlugin
              contentEditable={
                <ContentEditable
                  placeholder={placeholder}
                  className={resolveClass(classOverrides?.plainText, "")}
                />
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            {plugins.history !== false && (
              <HistoryPlugin externalHistoryState={historyState} />
            )}
          </>
        )}

        {(config.isCharLimit || config.isCharLimitUtf8) && (
          <CharacterLimitPlugin
            charset={config.isCharLimit ? "UTF-16" : "UTF-8"}
            maxLength={config.characterLimitMaxLength}
          />
        )}

        {config.isAutocomplete && <AutocompletePlugin />}
        <div>{config.showTableOfContents && <TableOfContentsPlugin />}</div>
        {config.shouldUseLexicalContextMenu && <ContextMenuPlugin />}
        {config.shouldAllowHighlightingWithBrackets && <SpecialTextPlugin />}
      </div>
      {config.showTreeView && <TreeViewPlugin />}
    </>
  );
}
