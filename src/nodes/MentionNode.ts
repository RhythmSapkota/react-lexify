import {
  $applyNodeReplacement,
  type DOMConversionMap,
  type DOMConversionOutput,
  type DOMExportOutput,
  type EditorConfig,
  type LexicalNode,
  type NodeKey,
  type SerializedTextNode,
  type Spread,
  TextNode,
} from 'lexical';
import { Mention } from '../plugins/MentionsPlugin';

export type SerializedMentionNode = Spread<
  {
    mention: Mention;
  },
  SerializedTextNode
>;


export class MentionNode extends TextNode {
  __mention: Mention;

  constructor(mention: Mention, key?: NodeKey) {
    super(mention.displayName, key);
    this.__mention = mention;
  }

  static getType(): string {
    return "mention";
  }

  static clone(node: MentionNode): MentionNode {
    return new MentionNode(node.__mention, node.__key);
  }

  static importJSON(serializedNode: SerializedMentionNode): MentionNode {
    return new MentionNode(serializedNode.mention);
  }

  exportJSON(): SerializedMentionNode {
    return {
      ...super.exportJSON(),
      mention: this.__mention,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.className = "mention";
    dom.style.backgroundColor = "rgba(24, 119, 232, 0.2)";
    dom.spellcheck = false;
    dom.dataset.mentionId = this.__mention.id;
    dom.dataset.mentionEmail = this.__mention.meta.email;
    dom.textContent = this.__mention.displayName;
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-mention", "true");
    element.setAttribute("data-mention-id", this.__mention.id);
    element.textContent = this.getTextContent();
    return { element };
  }

  getMention(): Mention {
    return this.__mention;
  }

  isTextEntity(): true {
    return true;
  }

  canInsertTextBefore(): boolean {
    return false;
  }

  canInsertTextAfter(): boolean {
    return false;
  }
}

// Factory
export function $createMentionNode(mention: Mention): MentionNode {
  const node = new MentionNode(mention);
  node.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(node);
}

export function $isMentionNode(node: LexicalNode | null): node is MentionNode {
  return node instanceof MentionNode;
}
