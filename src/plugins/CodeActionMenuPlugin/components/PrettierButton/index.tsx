import { $isCodeNode } from '@lexical/code';
import { $getNearestNodeFromDOMNode, LexicalEditor } from 'lexical';
import { Options } from 'prettier';
import { useState } from 'react';

interface Props {
  lang: string;
  editor: LexicalEditor;
  getCodeDOMNode: () => HTMLElement | null;
}

// Supported parser dynamic imports — no "estree" or external packages needed
const PRETTIER_PARSER_MODULES = {
  css: [() => import('prettier/parser-postcss')],
  html: [() => import('prettier/parser-html')],
  js: [() => import('prettier/parser-babel')],
  markdown: [() => import('prettier/parser-markdown')],
  typescript: [() => import('prettier/parser-typescript')],
} as const;

type LanguagesType = keyof typeof PRETTIER_PARSER_MODULES;

async function loadPrettierParsers(lang: string) {
  const dynamicImports = PRETTIER_PARSER_MODULES[lang as LanguagesType];
  const modules = await Promise.all(dynamicImports.map((imp) => imp()));
  return modules.map((mod) => mod.default || mod);
}

async function loadPrettierFormat() {
  const { format } = await import('prettier/standalone');
  return format;
}

const PRETTIER_OPTIONS_BY_LANG: Record<string, Options> = {
  css: { parser: 'css' },
  html: { parser: 'html' },
  js: { parser: 'babel' },
  markdown: { parser: 'markdown' },
  typescript: { parser: 'typescript' },
};

const LANG_CAN_BE_PRETTIER = Object.keys(PRETTIER_OPTIONS_BY_LANG);

export function canBePrettier(lang: string): boolean {
  return LANG_CAN_BE_PRETTIER.includes(lang);
}

function getPrettierOptions(lang: string): Options {
  const options = PRETTIER_OPTIONS_BY_LANG[lang];
  if (!options) {
    throw new Error(`Prettier does not support this language: ${lang}`);
  }
  return options;
}

export function PrettierButton({ lang, editor, getCodeDOMNode }: Props) {
  const [syntaxError, setSyntaxError] = useState('');
  const [tipsVisible, setTipsVisible] = useState(false);

  async function handleClick() {
    const codeDOMNode = getCodeDOMNode();
    if (!codeDOMNode) return;

    let content = '';
    editor.update(() => {
      const codeNode = $getNearestNodeFromDOMNode(codeDOMNode);
      if ($isCodeNode(codeNode)) {
        content = codeNode.getTextContent();
      }
    });

    if (!content.trim()) return;

    try {
      const format = await loadPrettierFormat();
      const plugins = await loadPrettierParsers(lang);
      const options = { ...getPrettierOptions(lang), plugins };
      const formatted = await format(content, options);

      editor.update(() => {
        const codeNode = $getNearestNodeFromDOMNode(codeDOMNode);
        if ($isCodeNode(codeNode)) {
          const selection = codeNode.select(0);
          selection.insertText(formatted);
          setSyntaxError('');
          setTipsVisible(false);
        }
      });
    } catch (err) {
      if (err instanceof Error) {
        setSyntaxError(err.message);
        setTipsVisible(true);
      } else {
        console.error('Unexpected error:', err);
      }
    }
  }

  return (
    <div className="prettier-wrapper">
      <button
        className="menu-item"
        onClick={handleClick}
        onMouseEnter={() => syntaxError && setTipsVisible(true)}
        onMouseLeave={() => syntaxError && setTipsVisible(false)}
        aria-label="Prettify Code"
      >
        {syntaxError ? (
          <i className="format prettier-error" />
        ) : (
          <i className="format prettier" />
        )}
      </button>
      {tipsVisible && <pre className="code-error-tips">{syntaxError}</pre>}
    </div>
  );
}
