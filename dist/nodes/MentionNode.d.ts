import { type DOMExportOutput, type EditorConfig, type LexicalNode, type NodeKey, type SerializedTextNode, type Spread, TextNode } from 'lexical';
import { Mention } from '../plugins/MentionsPlugin';
export type SerializedMentionNode = Spread<{
    mention: Mention;
}, SerializedTextNode>;
export declare class MentionNode extends TextNode {
    __mention: Mention;
    constructor(mention: Mention, key?: NodeKey);
    static getType(): string;
    static clone(node: MentionNode): MentionNode;
    static importJSON(serializedNode: SerializedMentionNode): MentionNode;
    exportJSON(): SerializedMentionNode;
    createDOM(config: EditorConfig): HTMLElement;
    exportDOM(): DOMExportOutput;
    getMention(): Mention;
    isTextEntity(): true;
    canInsertTextBefore(): boolean;
    canInsertTextAfter(): boolean;
}
export declare function $createMentionNode(mention: Mention): MentionNode;
export declare function $isMentionNode(node: LexicalNode | null): node is MentionNode;
