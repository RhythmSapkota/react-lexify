/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX } from "react";
import * as React from "react";
import { Dispatch, useCallback, useEffect, useState } from "react";

import {
  $isCodeNode,
  CODE_LANGUAGE_FRIENDLY_NAME_MAP,
  CODE_LANGUAGE_MAP,
  getLanguageFriendlyName,
} from "@lexical/code";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isListNode, ListNode } from "@lexical/list";
import { INSERT_EMBED_COMMAND } from "@lexical/react/LexicalAutoEmbedPlugin";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import { $isHeadingNode } from "@lexical/rich-text";
import {
  $getSelectionStyleValueForProperty,
  $isParentElementRTL,
  $patchStyleText,
} from "@lexical/selection";
import { $isTableNode, $isTableSelection } from "@lexical/table";
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  $isEditorIsNestedEditor,
  IS_APPLE,
  mergeRegister,
} from "@lexical/utils";
import {
  $getNodeByKey,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  $isRootOrShadowRoot,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  HISTORIC_TAG,
  INDENT_CONTENT_COMMAND,
  LexicalCommand,
  LexicalEditor,
  NodeKey,
  OUTDENT_CONTENT_COMMAND,
  REDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextFormatType,
  UNDO_COMMAND,
} from "lexical";

// Local components and hooks
import {
  blockTypeToBlockName,
  useToolbarState,
} from "../../context/ToolbarContext";
import useModal from "../../hooks/useModal";
import catTypingGif from "../../images/cat-typing.gif";
import { $createStickyNode } from "../../nodes/StickyNode";
import DropDown, { DropDownItem } from "../../ui/DropDown";
import DropdownColorPicker from "../../ui/DropdownColorPicker";
import { getSelectedNode } from "../../utils/getSelectedNode";
import { sanitizeUrl } from "../../utils/url";
import { EmbedConfigs } from "../AutoEmbedPlugin";
import { INSERT_COLLAPSIBLE_COMMAND } from "../CollapsiblePlugin";
import { InsertEquationDialog } from "../EquationsPlugin";
import { INSERT_EXCALIDRAW_COMMAND } from "../ExcalidrawPlugin";
import {
  INSERT_IMAGE_COMMAND,
  InsertImageDialog,
  InsertImagePayload,
} from "../ImagesPlugin";
import { InsertInlineImageDialog } from "../InlineImagePlugin";
import InsertLayoutDialog from "../LayoutPlugin/InsertLayoutDialog";
import { INSERT_PAGE_BREAK } from "../PageBreakPlugin";
import { InsertPollDialog } from "../PollPlugin";
import { SHORTCUTS } from "../ShortcutsPlugin/shortcuts";
import { InsertTableDialog } from "../TablePlugin";
import FontSize from "./fontSize";
import {
  clearFormatting,
  formatBulletList,
  formatCheckList,
  formatCode,
  formatHeading,
  formatNumberedList,
  formatParagraph,
  formatQuote,
} from "./utils";
import type { ToolbarStyleConfig } from "./toolbar-style.types";

// Constants
const rootTypeToRootName = {
  root: "Root",
  table: "Table",
};

function getCodeLanguageOptions(): [string, string][] {
  const options: [string, string][] = [];
  for (const [lang, friendlyName] of Object.entries(
    CODE_LANGUAGE_FRIENDLY_NAME_MAP
  )) {
    options.push([lang, friendlyName]);
  }
  return options;
}

const CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();

const FONT_FAMILY_OPTIONS: [string, string][] = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"],
];

const FONT_SIZE_OPTIONS: [string, string][] = [
  ["10px", "10px"],
  ["11px", "11px"],
  ["12px", "12px"],
  ["13px", "13px"],
  ["14px", "14px"],
  ["15px", "15px"],
  ["16px", "16px"],
  ["17px", "17px"],
  ["18px", "18px"],
  ["19px", "19px"],
  ["20px", "20px"],
];

const ELEMENT_FORMAT_OPTIONS: {
  [key in Exclude<ElementFormatType, "">]: {
    icon: string;
    iconRTL: string;
    name: string;
  };
} = {
  center: {
    icon: "center-align",
    iconRTL: "center-align",
    name: "Center Align",
  },
  end: {
    icon: "right-align",
    iconRTL: "left-align",
    name: "End Align",
  },
  justify: {
    icon: "justify-align",
    iconRTL: "justify-align",
    name: "Justify Align",
  },
  left: {
    icon: "left-align",
    iconRTL: "left-align",
    name: "Left Align",
  },
  right: {
    icon: "right-align",
    iconRTL: "right-align",
    name: "Right Align",
  },
  start: {
    icon: "left-align",
    iconRTL: "right-align",
    name: "Start Align",
  },
};

// Utility functions
function dropDownActiveClass(active: boolean): string {
  return active ? "active dropdown-item-active" : "";
}

function resolveClass(
  override: string | ((defaultClass: string) => string) | undefined,
  defaultClass: string
): string {
  if (typeof override === "function") {
    return override(defaultClass);
  }
  return `${override} ${defaultClass}`;
}
// Components
const Divider = (): JSX.Element => <div className="divider" />;

interface ToolbarButtonProps {
  command: LexicalCommand<TextFormatType>;
  active: boolean;
  disabled: boolean;
  icon: string;
  title: string;
  shortcut: string;
  buttonKey: string;
  toolbarStyle?: ToolbarStyleConfig;
  onClick?: () => void;
}

const ToolbarButton = React.memo(
  ({
    command,
    active,
    disabled,
    icon,
    title,
    shortcut,
    buttonKey,
    toolbarStyle,
    onClick,
  }: ToolbarButtonProps) => {
    const buttonClass = resolveClass(
      toolbarStyle?.buttonClasses?.[buttonKey],
      `toolbar-item spaced ${active ? "active" : ""}`
    );

    const iconClass = resolveClass(
      toolbarStyle?.iconClasses?.[buttonKey],
      `format ${icon}`
    );

    const handleClick = useCallback(() => {
      if (onClick) {
        onClick();
      }
    }, [onClick]);

    return (
      <button type={"button"}
        disabled={disabled}
        onClick={handleClick}
        className={buttonClass}
        title={`${title} (${shortcut})`}
        
        aria-label={`${title}. Shortcut: ${shortcut}`}
      >
        <i className={iconClass} />
      </button>
    );
  }
);

const BlockFormatDropDown = React.memo(
  ({
    editor,
    blockType,
    rootType,
    disabled = false,
    toolbarStyle,
  }: {
    editor: LexicalEditor;
    blockType: keyof typeof blockTypeToBlockName;
    rootType: keyof typeof rootTypeToRootName;
    disabled?: boolean;
    toolbarStyle?: ToolbarStyleConfig;
  }): JSX.Element => {
    const getButtonClassName = () =>
      resolveClass(
        toolbarStyle?.buttonClasses?.blockControls,
        "toolbar-item block-controls"
      );

    const getButtonIconClassName = () =>
      resolveClass(
        toolbarStyle?.iconClasses?.[blockType],
        `icon block-type ${blockType}`
      );

    const getItemClassName = (type: string) =>
      resolveClass(
        toolbarStyle?.dropdownItemClasses?.[type],
        `item wide ${dropDownActiveClass(blockType === type)}`
      );

    const getLabel = (type: string) =>
      toolbarStyle?.labelOverrides?.[type] ?? blockTypeToBlockName[type];

    return (
      <DropDown
        disabled={disabled}
        buttonClassName={getButtonClassName()}
        buttonIconClassName={getButtonIconClassName()}
        buttonLabel={getLabel(blockType)}
        buttonAriaLabel="Formatting options for text style"
      >
        <DropDownItem
          className={getItemClassName("paragraph")}
          onClick={() => formatParagraph(editor)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.paragraph,
                "icon paragraph"
              )}
            />
            <span className="text">{getLabel("paragraph")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.NORMAL}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("h1")}
          onClick={() => formatHeading(editor, blockType, "h1")}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(toolbarStyle?.iconClasses?.h1, "icon h1")}
            />
            <span className="text">{getLabel("h1")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.HEADING1}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("h2")}
          onClick={() => formatHeading(editor, blockType, "h2")}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(toolbarStyle?.iconClasses?.h2, "icon h2")}
            />
            <span className="text">{getLabel("h2")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.HEADING2}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("h3")}
          onClick={() => formatHeading(editor, blockType, "h3")}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(toolbarStyle?.iconClasses?.h3, "icon h3")}
            />
            <span className="text">{getLabel("h3")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.HEADING3}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("bullet")}
          onClick={() => formatBulletList(editor, blockType)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.bullet,
                "icon bullet-list"
              )}
            />
            <span className="text">{getLabel("bullet")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.BULLET_LIST}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("number")}
          onClick={() => formatNumberedList(editor, blockType)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.number,
                "icon numbered-list"
              )}
            />
            <span className="text">{getLabel("number")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.NUMBERED_LIST}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("check")}
          onClick={() => formatCheckList(editor, blockType)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.check,
                "icon check-list"
              )}
            />
            <span className="text">{getLabel("check")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.CHECK_LIST}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("quote")}
          onClick={() => formatQuote(editor, blockType)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.quote,
                "icon quote"
              )}
            />
            <span className="text">{getLabel("quote")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.QUOTE}</span>
        </DropDownItem>
        <DropDownItem
          className={getItemClassName("code")}
          onClick={() => formatCode(editor, blockType)}
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.code,
                "icon code"
              )}
            />
            <span className="text">{getLabel("code")}</span>
          </div>
          <span className="shortcut">{SHORTCUTS.CODE_BLOCK}</span>
        </DropDownItem>
      </DropDown>
    );
  }
);

const FontDropDown = React.memo(
  ({
    editor,
    value,
    style,
    disabled = false,
    toolbarStyle,
  }: {
    editor: LexicalEditor;
    value: string;
    style: "font-family" | "font-size";
    disabled?: boolean;
    toolbarStyle?: ToolbarStyleConfig;
  }): JSX.Element => {
    const handleClick = useCallback(
      (option: string) => {
        editor.update(() => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, {
              [style]: option,
            });
          }
        });
      },
      [editor, style]
    );

    const buttonAriaLabel =
      style === "font-family"
        ? "Formatting options for font family"
        : "Formatting options for font size";

    const buttonClassName = resolveClass(
      toolbarStyle?.buttonClasses?.[
        style === "font-family" ? "fontFamily" : "fontSize"
      ],
      `toolbar-item ${style}`
    );

    const buttonIconClassName = resolveClass(
      toolbarStyle?.iconClasses?.[
        style === "font-family" ? "fontFamily" : "fontSize"
      ],
      style === "font-family" ? "icon block-type font-family" : ""
    );

    return (
      <DropDown
        disabled={disabled}
        buttonClassName={buttonClassName}
        buttonLabel={value}
        buttonIconClassName={buttonIconClassName}
        buttonAriaLabel={buttonAriaLabel}
      >
        {(style === "font-family"
          ? FONT_FAMILY_OPTIONS
          : FONT_SIZE_OPTIONS
        ).map(([option, text]) => (
          <DropDownItem
            className={`item ${dropDownActiveClass(value === option)} ${
              style === "font-size" ? "fontsize-item" : ""
            }`}
            onClick={() => handleClick(option)}
            key={option}
          >
            <span className="text">{text}</span>
          </DropDownItem>
        ))}
      </DropDown>
    );
  }
);

const ElementFormatDropdown = React.memo(
  ({
    editor,
    value,
    isRTL,
    disabled = false,
    toolbarStyle,
  }: {
    editor: LexicalEditor;
    value: ElementFormatType;
    isRTL: boolean;
    disabled: boolean;
    toolbarStyle?: ToolbarStyleConfig;
  }) => {
    const formatOption = ELEMENT_FORMAT_OPTIONS[value || "left"];

    const buttonClassName = resolveClass(
      toolbarStyle?.buttonClasses?.alignment,
      "toolbar-item spaced alignment"
    );

    const buttonIconClassName = resolveClass(
      toolbarStyle?.iconClasses?.alignment,
      `icon ${isRTL ? formatOption.iconRTL : formatOption.icon}`
    );

    return (
      <DropDown
        disabled={disabled}
        buttonLabel={formatOption.name}
        buttonIconClassName={buttonIconClassName}
        buttonClassName={buttonClassName}
        buttonAriaLabel="Formatting options for text alignment"
      >
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.leftAlign,
                "icon left-align"
              )}
            />
            <span className="text">Left Align</span>
          </div>
          <span className="shortcut">{SHORTCUTS.LEFT_ALIGN}</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.centerAlign,
                "icon center-align"
              )}
            />
            <span className="text">Center Align</span>
          </div>
          <span className="shortcut">{SHORTCUTS.CENTER_ALIGN}</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.rightAlign,
                "icon right-align"
              )}
            />
            <span className="text">Right Align</span>
          </div>
          <span className="shortcut">{SHORTCUTS.RIGHT_ALIGN}</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.justifyAlign,
                "icon justify-align"
              )}
            />
            <span className="text">Justify Align</span>
          </div>
          <span className="shortcut">{SHORTCUTS.JUSTIFY_ALIGN}</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "start");
          }}
          className="item wide"
        >
          <i
            className={resolveClass(
              toolbarStyle?.iconClasses?.startAlign,
              `icon ${
                isRTL
                  ? ELEMENT_FORMAT_OPTIONS.start.iconRTL
                  : ELEMENT_FORMAT_OPTIONS.start.icon
              }`
            )}
          />
          <span className="text">Start Align</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "end");
          }}
          className="item wide"
        >
          <i
            className={resolveClass(
              toolbarStyle?.iconClasses?.endAlign,
              `icon ${
                isRTL
                  ? ELEMENT_FORMAT_OPTIONS.end.iconRTL
                  : ELEMENT_FORMAT_OPTIONS.end.icon
              }`
            )}
          />
          <span className="text">End Align</span>
        </DropDownItem>
        <Divider />
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined);
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.outdent,
                `icon ${isRTL ? "indent" : "outdent"}`
              )}
            />
            <span className="text">Outdent</span>
          </div>
          <span className="shortcut">{SHORTCUTS.OUTDENT}</span>
        </DropDownItem>
        <DropDownItem
          onClick={() => {
            editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined);
          }}
          className="item wide"
        >
          <div className="icon-text-container">
            <i
              className={resolveClass(
                toolbarStyle?.iconClasses?.indent,
                `icon ${isRTL ? "outdent" : "indent"}`
              )}
            />
            <span className="text">Indent</span>
          </div>
          <span className="shortcut">{SHORTCUTS.INDENT}</span>
        </DropDownItem>
      </DropDown>
    );
  }
);

// Main ToolbarPlugin component
export default function ToolbarPlugin({
  editor,
  activeEditor,
  setActiveEditor,
  setIsLinkEditMode,
  toolbarStyle,
}: {
  editor: LexicalEditor;
  activeEditor: LexicalEditor;
  setActiveEditor: Dispatch<LexicalEditor>;
  setIsLinkEditMode: Dispatch<boolean>;
  toolbarStyle?: ToolbarStyleConfig;
}): JSX.Element {
  const [selectedElementKey, setSelectedElementKey] = useState<NodeKey | null>(
    null
  );
  const [modal, showModal] = useModal();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const { toolbarState, updateToolbarState } = useToolbarState();

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      if (activeEditor !== editor && $isEditorIsNestedEditor(activeEditor)) {
        const rootElement = activeEditor.getRootElement();
        updateToolbarState(
          "isImageCaption",
          !!rootElement?.parentElement?.classList.contains(
            "image-caption-container"
          )
        );
      } else {
        updateToolbarState("isImageCaption", false);
      }

      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
              const parent = e.getParent();
              return parent !== null && $isRootOrShadowRoot(parent);
            });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);

      updateToolbarState("isRTL", $isParentElementRTL(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      const isLink = $isLinkNode(parent) || $isLinkNode(node);
      updateToolbarState("isLink", isLink);

      const tableNode = $findMatchingParent(node, $isTableNode);
      if ($isTableNode(tableNode)) {
        updateToolbarState("rootType", "table");
      } else {
        updateToolbarState("rootType", "root");
      }

      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode
          );
          const type = parentList
            ? parentList.getListType()
            : element.getListType();

          updateToolbarState("blockType", type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          if (type in blockTypeToBlockName) {
            updateToolbarState(
              "blockType",
              type as keyof typeof blockTypeToBlockName
            );
          }
          if ($isCodeNode(element)) {
            const language =
              element.getLanguage() as keyof typeof CODE_LANGUAGE_MAP;
            updateToolbarState(
              "codeLanguage",
              language ? CODE_LANGUAGE_MAP[language] || language : ""
            );
            return;
          }
        }
      }
      // Handle buttons
      updateToolbarState(
        "fontColor",
        $getSelectionStyleValueForProperty(selection, "color", "#000")
      );
      updateToolbarState(
        "bgColor",
        $getSelectionStyleValueForProperty(
          selection,
          "background-color",
          "#fff"
        )
      );
      updateToolbarState(
        "fontFamily",
        $getSelectionStyleValueForProperty(selection, "font-family", "Arial")
      );
      let matchingParent;
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      // If matchingParent is a valid node, pass it's format type
      updateToolbarState(
        "elementFormat",
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
          ? node.getFormatType()
          : parent?.getFormatType() || "left"
      );
    }
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      // Update text format
      updateToolbarState("isBold", selection.hasFormat("bold"));
      updateToolbarState("isItalic", selection.hasFormat("italic"));
      updateToolbarState("isUnderline", selection.hasFormat("underline"));
      updateToolbarState(
        "isStrikethrough",
        selection.hasFormat("strikethrough")
      );
      updateToolbarState("isSubscript", selection.hasFormat("subscript"));
      updateToolbarState("isSuperscript", selection.hasFormat("superscript"));
      updateToolbarState("isHighlight", selection.hasFormat("highlight"));
      updateToolbarState("isCode", selection.hasFormat("code"));
      updateToolbarState(
        "fontSize",
        $getSelectionStyleValueForProperty(selection, "font-size", "15px")
      );
      updateToolbarState("isLowercase", selection.hasFormat("lowercase"));
      updateToolbarState("isUppercase", selection.hasFormat("uppercase"));
      updateToolbarState("isCapitalize", selection.hasFormat("capitalize"));
    }
  }, [activeEditor, editor, updateToolbarState]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        $updateToolbar();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar, setActiveEditor]);

  useEffect(() => {
    activeEditor.getEditorState().read(() => {
      $updateToolbar();
    });
  }, [activeEditor, $updateToolbar]);

  useEffect(() => {
    return mergeRegister(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          updateToolbarState("canUndo", payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          updateToolbarState("canRedo", payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [$updateToolbar, activeEditor, editor, updateToolbarState]);

  const applyStyleText = useCallback(
    (styles: Record<string, string>, skipHistoryStack?: boolean) => {
      activeEditor.update(
        () => {
          const selection = $getSelection();
          if (selection !== null) {
            $patchStyleText(selection, styles);
          }
        },
        skipHistoryStack ? { tag: HISTORIC_TAG } : {}
      );
    },
    [activeEditor]
  );

  const onFontColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const onBgColorSelect = useCallback(
    (value: string, skipHistoryStack: boolean) => {
      applyStyleText({ "background-color": value }, skipHistoryStack);
    },
    [applyStyleText]
  );

  const insertLink = useCallback(() => {
    if (!toolbarState.isLink) {
      setIsLinkEditMode(true);
      activeEditor.dispatchCommand(
        TOGGLE_LINK_COMMAND,
        sanitizeUrl("https://")
      );
    } else {
      setIsLinkEditMode(false);
      activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [activeEditor, setIsLinkEditMode, toolbarState.isLink]);

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [activeEditor, selectedElementKey]
  );

  const insertGifOnClick = (payload: InsertImagePayload) => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  };

  const canViewerSeeInsertDropdown = !toolbarState.isImageCaption;
  const canViewerSeeInsertCodeButton = !toolbarState.isImageCaption;

  const rootClassName = resolveClass(toolbarStyle?.rootClass, "toolbar");

  return (
    <div className={rootClassName}>
      <ToolbarButton
        command={UNDO_COMMAND}
        active={false}
        disabled={!toolbarState.canUndo || !isEditable}
        icon="undo"
        title="Undo"
        shortcut={IS_APPLE ? "⌘Z" : "Ctrl+Z"}
        buttonKey="undo"
        toolbarStyle={toolbarStyle}
        onClick={() => activeEditor.dispatchCommand(UNDO_COMMAND, undefined)}
      />
      <ToolbarButton
        command={REDO_COMMAND}
        active={false}
        disabled={!toolbarState.canRedo || !isEditable}
        icon="redo"
        title="Redo"
        shortcut={IS_APPLE ? "⇧⌘Z" : "Ctrl+Y"}
        buttonKey="redo"
        toolbarStyle={toolbarStyle}
        onClick={() => activeEditor.dispatchCommand(REDO_COMMAND, undefined)}
      />
      <Divider />
      {toolbarState.blockType in blockTypeToBlockName &&
        activeEditor === editor && (
          <>
            <BlockFormatDropDown
              disabled={!isEditable}
              blockType={toolbarState.blockType}
              rootType={toolbarState.rootType}
              editor={activeEditor}
              toolbarStyle={toolbarStyle}
            />
            <Divider />
          </>
        )}
      {toolbarState.blockType === "code" ? (
        <DropDown
          disabled={!isEditable}
          buttonClassName="toolbar-item code-language"
          buttonLabel={getLanguageFriendlyName(toolbarState.codeLanguage)}
          buttonAriaLabel="Select language"
        >
          {CODE_LANGUAGE_OPTIONS.map(([value, name]) => {
            return (
              <DropDownItem
                className={`item ${dropDownActiveClass(
                  value === toolbarState.codeLanguage
                )}`}
                onClick={() => onCodeLanguageSelect(value)}
                key={value}
              >
                <span className="text">{name}</span>
              </DropDownItem>
            );
          })}
        </DropDown>
      ) : (
        <>
          <FontDropDown
            disabled={!isEditable}
            style={"font-family"}
            value={toolbarState.fontFamily}
            editor={activeEditor}
            toolbarStyle={toolbarStyle}
          />
          <Divider />
          <FontSize
            inputClassName={toolbarStyle?.inputClasses?.fontSizeInput}
            decrementButtonClassName={
              toolbarStyle?.buttonClasses?.fontSizeIncrease
            }
            incrementButtonClassName={
              toolbarStyle?.buttonClasses?.fontSizeDecrease
            }
            selectionFontSize={toolbarState.fontSize.slice(0, -2)}
            editor={activeEditor}
            disabled={!isEditable}
          />
          <Divider />
          <ToolbarButton
            command={FORMAT_TEXT_COMMAND}
            active={toolbarState.isBold}
            disabled={!isEditable}
            icon="bold"
            title="Bold"
            shortcut={SHORTCUTS.BOLD}
            buttonKey="bold"
            toolbarStyle={toolbarStyle}
            onClick={() =>
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")
            }
          />
          <ToolbarButton
            command={FORMAT_TEXT_COMMAND}
            active={toolbarState.isItalic}
            disabled={!isEditable}
            icon="italic"
            title="Italic"
            shortcut={SHORTCUTS.ITALIC}
            buttonKey="italic"
            toolbarStyle={toolbarStyle}
            onClick={() =>
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
            }
          />
          <ToolbarButton
            command={FORMAT_TEXT_COMMAND}
            active={toolbarState.isUnderline}
            disabled={!isEditable}
            icon="underline"
            title="Underline"
            shortcut={SHORTCUTS.UNDERLINE}
            buttonKey="underline"
            toolbarStyle={toolbarStyle}
            onClick={() =>
              activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
            }
          />
          {canViewerSeeInsertCodeButton && (
            <ToolbarButton
              command={FORMAT_TEXT_COMMAND}
              active={toolbarState.isCode}
              disabled={!isEditable}
              icon="code"
              title="Insert code block"
              shortcut={SHORTCUTS.INSERT_CODE_BLOCK}
              buttonKey="code"
              toolbarStyle={toolbarStyle}
              onClick={() =>
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")
              }
            />
          )}
          <ToolbarButton
            command={TOGGLE_LINK_COMMAND}
            active={toolbarState.isLink}
            disabled={!isEditable}
            icon="link"
            title="Insert link"
            shortcut={SHORTCUTS.INSERT_LINK}
            buttonKey="link"
            toolbarStyle={toolbarStyle}
            onClick={insertLink}
          />
          <DropdownColorPicker
            disabled={!isEditable}
            buttonClassName={resolveClass(
              toolbarStyle?.buttonClasses?.fontColor,
              "toolbar-item color-picker"
            )}
            buttonAriaLabel="Formatting text color"
            buttonIconClassName={resolveClass(
              toolbarStyle?.iconClasses?.fontColor,
              "icon font-color"
            )}
            color={toolbarState.fontColor}
            onChange={onFontColorSelect}
            title="text color"
          />
          <DropdownColorPicker
            disabled={!isEditable}
            buttonClassName={resolveClass(
              toolbarStyle?.buttonClasses?.bgColor,
              "toolbar-item color-picker"
            )}
            buttonAriaLabel="Formatting background color"
            buttonIconClassName={resolveClass(
              toolbarStyle?.iconClasses?.bgColor,
              "icon bg-color"
            )}
            color={toolbarState.bgColor}
            onChange={onBgColorSelect}
            title="bg color"
          />
          <DropDown
            disabled={!isEditable}
            buttonClassName={resolveClass(
              toolbarStyle?.buttonClasses?.moreStyles,
              "toolbar-item spaced"
            )}
            buttonLabel=""
            buttonAriaLabel="Formatting options for additional text styles"
            buttonIconClassName={resolveClass(
              toolbarStyle?.iconClasses?.moreStyles,
              "icon dropdown-more"
            )}
          >
            <DropDownItem
              onClick={() => {
                activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, "lowercase");
              }}
              className={`item wide ${dropDownActiveClass(
                toolbarState.isLowercase
              )}`}
              title="Lowercase"
              aria-label="Format text to lowercase"
            >
              <div className="icon-text-container">
                <i
                  className={resolveClass(
                    toolbarStyle?.iconClasses?.lowercase,
                    "icon lowercase"
                  )}
                />
                <span className="text">Lowercase</span>
              </div>
              <span className="shortcut">{SHORTCUTS.LOWERCASE}</span>
            </DropDownItem>
            {/* Other dropdown items */}
          </DropDown>
          {canViewerSeeInsertDropdown && (
            <>
              <Divider />
              <DropDown
                disabled={!isEditable}
                buttonClassName={resolveClass(
                  toolbarStyle?.buttonClasses?.insert,
                  "toolbar-item spaced"
                )}
                buttonLabel="Insert"
                buttonAriaLabel="Insert specialized editor node"
                buttonIconClassName={resolveClass(
                  toolbarStyle?.iconClasses?.insert,
                  "icon plus"
                )}
              >
                {/* --- Group: Basic Elements --- */}
                <DropDownItem
                  onClick={() =>
                    activeEditor.dispatchCommand(
                      INSERT_HORIZONTAL_RULE_COMMAND,
                      undefined
                    )
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.horizontalRule,
                      "icon horizontal-rule"
                    )}
                  />
                  <span className="text">Horizontal Rule</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    activeEditor.dispatchCommand(INSERT_PAGE_BREAK, undefined)
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.pageBreak,
                      "icon page-break"
                    )}
                  />
                  <span className="text">Page Break</span>
                </DropDownItem>

                <Divider />

                {/* --- Group: Media --- */}
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Image", (onClose) => (
                      <InsertImageDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.image,
                      "icon image"
                    )}
                  />
                  <span className="text">Image</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Inline Image", (onClose) => (
                      <InsertInlineImageDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.inlineImage,
                      "icon image"
                    )}
                  />
                  <span className="text">Inline Image</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    insertGifOnClick({
                      altText: "Cat typing on a laptop",
                      src: catTypingGif,
                    })
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.gif,
                      "icon gif"
                    )}
                  />
                  <span className="text">GIF</span>
                </DropDownItem>

                <Divider />

                {/* --- Group: Interactive Elements --- */}
                <DropDownItem
                  onClick={() =>
                    activeEditor.dispatchCommand(
                      INSERT_EXCALIDRAW_COMMAND,
                      undefined
                    )
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.excalidraw,
                      "icon diagram-2"
                    )}
                  />
                  <span className="text">Excalidraw</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Table", (onClose) => (
                      <InsertTableDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.table,
                      "icon table"
                    )}
                  />
                  <span className="text">Table</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Poll", (onClose) => (
                      <InsertPollDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.poll,
                      "icon poll"
                    )}
                  />
                  <span className="text">Poll</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Columns Layout", (onClose) => (
                      <InsertLayoutDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.columns,
                      "icon columns"
                    )}
                  />
                  <span className="text">Columns Layout</span>
                </DropDownItem>

                <Divider />

                {/* --- Group: Math / Sticky / Collapsible --- */}
                <DropDownItem
                  onClick={() =>
                    showModal("Insert Equation", (onClose) => (
                      <InsertEquationDialog
                        activeEditor={activeEditor}
                        onClose={onClose}
                      />
                    ))
                  }
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.equation,
                      "icon equation"
                    )}
                  />
                  <span className="text">Equation</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() => {
                    editor.update(() => {
                      const root = $getRoot();
                      const stickyNode = $createStickyNode(0, 0);
                      root.append(stickyNode);
                    });
                  }}
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.sticky,
                      "icon sticky"
                    )}
                  />
                  <span className="text">Sticky Note</span>
                </DropDownItem>
                <DropDownItem
                  onClick={() => {
                    editor.dispatchCommand(
                      INSERT_COLLAPSIBLE_COMMAND,
                      undefined
                    );
                  }}
                  className="item"
                >
                  <i
                    className={resolveClass(
                      toolbarStyle?.iconClasses?.collapsible,
                      "icon caret-right"
                    )}
                  />
                  <span className="text">Collapsible container</span>
                </DropDownItem>

                <Divider />

                {/* --- Group: Embeds --- */}
                {EmbedConfigs.map((embedConfig) => (
                  <DropDownItem
                    key={embedConfig.type}
                    onClick={() => {
                      activeEditor.dispatchCommand(
                        INSERT_EMBED_COMMAND,
                        embedConfig.type
                      );
                    }}
                    className="item"
                  >
                    <i
                      className={resolveClass(
                        toolbarStyle?.iconClasses?.[embedConfig.type],
                        "icon embed"
                      )}
                    />
                    <span className="text">{embedConfig.contentName}</span>
                  </DropDownItem>
                ))}
              </DropDown>
            </>
          )}
        </>
      )}
      <Divider />
      <ElementFormatDropdown
        disabled={!isEditable}
        value={toolbarState.elementFormat}
        editor={activeEditor}
        isRTL={toolbarState.isRTL}
      />

      {modal}
    </div>
  );
}
