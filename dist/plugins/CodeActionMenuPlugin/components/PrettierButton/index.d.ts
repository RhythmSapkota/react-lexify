import './index.css';
import { LexicalEditor } from 'lexical';
interface Props {
    lang: string;
    editor: LexicalEditor;
    getCodeDOMNode: () => HTMLElement | null;
}
export declare function canBePrettier(lang: string): boolean;
export declare function PrettierButton({ lang, editor, getCodeDOMNode }: Props): import("react/jsx-runtime").JSX.Element;
export {};
