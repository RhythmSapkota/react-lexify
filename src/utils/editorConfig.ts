import {
  $createParagraphNode,
  $createTextNode,
  $getRoot,
  $isTextNode,
  TextNode,
  DOMConversionMap,
} from 'lexical';
import { $createQuoteNode, $createHeadingNode } from '@lexical/rich-text';
import { $createListItemNode, $createListNode } from '@lexical/list';
import { $createLinkNode } from '@lexical/link';
import { parseAllowedColor } from '../ui/ColorPicker';
import { parseAllowedFontSize } from '../plugins/ToolbarPlugin/fontSize';

export function $prepopulatedRichText() {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const heading = $createHeadingNode('h1');
    heading.append($createTextNode('Welcome to the playground'));
    root.append(heading);

    const paragraph = $createParagraphNode();
    paragraph.append(
      $createTextNode('This is the playground. Try typing some text with '),
      $createTextNode('bold').toggleFormat('bold'),
      $createTextNode(', '),
      $createTextNode('italic').toggleFormat('italic'),
      $createTextNode(', or '),
      $createTextNode('code').toggleFormat('code'),
      $createTextNode(' formatting.')
    );
    root.append(paragraph);
  }
}

function getExtraStyles(element: HTMLElement): string {
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);

  if (fontSize !== '' && fontSize !== '15px') {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== '' && color !== 'rgb(0, 0, 0)') {
    extraStyles += `color: ${color};`;
  }

  return extraStyles;
}

export function buildImportMap(): DOMConversionMap {
  const importMap: DOMConversionMap = {};
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) return null;
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }
  return importMap;
}
