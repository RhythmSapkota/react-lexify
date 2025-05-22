export type ToolbarButtonKey =
  | "bold"
  | "italic"
  | "underline"
  | "code"
  | "link"
  | "strikethrough"
  | "subscript"
  | "superscript"
  | "highlight"
  | "clearFormatting"
  | "undo"
  | "redo"
  | "insertCodeBlock"
  | "insertLink"
  | "lowercase"
  | "uppercase"
  | "capitalize"
  | "fontColor"
  | "bgColor"
  | "insert"
  | "blockControls"
  | "alignment"
  | "fontFamily"
  | "fontSize"
  | "moreStyles"
  | "horizontalRule"
  | "pageBreak"
  | "image"
  | "inlineImage"
  | "gif"
  | "excalidraw"
  | "table"
  | "poll"
  | "columns"
  | "equation"
  | "sticky"
  | "collapsible";

export type ToolbarDropdownKey =
  | "paragraph"
  | "h1"
  | "h2"
  | "h3"
  | "bullet"
  | "number"
  | "check"
  | "quote"
  | "code"
  | "leftAlign"
  | "centerAlign"
  | "rightAlign"
  | "justifyAlign"
  | "startAlign"
  | "endAlign"
  | "outdent"
  | "indent";

export type ClassNameOverride = string | ((defaultClass: string) => string);

export type ToolbarStyleConfig = {
  rootClass?: ClassNameOverride;
  buttonClasses?: Partial<Record<ToolbarButtonKey, ClassNameOverride>>;
  iconClasses?: Partial<
    Record<ToolbarButtonKey | ToolbarDropdownKey, ClassNameOverride>
  >;
  dropdownItemClasses?: Partial<Record<ToolbarDropdownKey, ClassNameOverride>>;
  labelOverrides?: Partial<Record<ToolbarDropdownKey, string>>;
};
