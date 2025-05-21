import type { JSX } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  LexicalTypeaheadMenuPlugin,
  MenuOption,
  MenuTextMatch,
  useBasicTypeaheadTriggerMatch,
} from "@lexical/react/LexicalTypeaheadMenuPlugin";
import { TextNode } from "lexical";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { $createMentionNode } from "../../nodes/MentionNode";

export interface Mention {
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

interface MentionsPluginProps {
  fetchMentions: (query: string) => Promise<Mention[]>;
  onMentionSelect?: (mention: Mention) => void;
  renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
}

const PUNCTUATION =
  "\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'\"~=<>_:;";
const TRIGGERS = "@";
const VALID_CHARS = `[^${TRIGGERS}${PUNCTUATION}\\s]`;
const VALID_JOINS = `(?:\\.[ |$]| |[${PUNCTUATION}])`;
const LENGTH_LIMIT = 75;
const ALIAS_LENGTH_LIMIT = 50;
const SUGGESTION_LIST_LENGTH_LIMIT = 5;

const AtSignMentionsRegex = new RegExp(
  `(^|\\s|\\()([${TRIGGERS}]((?:${VALID_CHARS}${VALID_JOINS}){0,${LENGTH_LIMIT}}))$`
);

const AtSignMentionsRegexAliasRegex = new RegExp(
  `(^|\\s|\\()([${TRIGGERS}]((?:${VALID_CHARS}){0,${ALIAS_LENGTH_LIMIT}}))$`
);

const mentionsCache = new Map<string, Mention[] | null>();

function useMentionLookupService(
  mentionString: string | null,
  fetchMentions: (query: string) => Promise<Mention[]>
) {
  const [results, setResults] = useState<Mention[]>([]);

  useEffect(() => {
    if (!mentionString) {
      setResults([]);
      return;
    }

    const cached = mentionsCache.get(mentionString);
    if (cached === null) return;
    if (cached !== undefined) {
      setResults(cached);
      return;
    }

    mentionsCache.set(mentionString, null);

    fetchMentions(mentionString)
      .then((res) => {
        mentionsCache.set(mentionString, res);
        setResults(res);
      })
      .catch(() => {
        mentionsCache.set(mentionString, []);
        setResults([]);
      });
  }, [mentionString, fetchMentions]);

  return results;
}

function checkForAtSignMentions(
  text: string,
  minMatchLength: number
): MenuTextMatch | null {
  let match =
    AtSignMentionsRegex.exec(text) || AtSignMentionsRegexAliasRegex.exec(text);
  if (!match) return null;

  const maybeLeadingWhitespace = match[1];
  const matchingString = match[3];

  if (matchingString.length >= minMatchLength) {
    return {
      leadOffset: match.index + maybeLeadingWhitespace.length,
      matchingString,
      replaceableString: match[2],
    };
  }
  return null;
}

function getPossibleQueryMatch(text: string): MenuTextMatch | null {
  return checkForAtSignMentions(text, 1);
}

class MentionTypeaheadOption extends MenuOption {
  mention: Mention;

  constructor(mention: Mention) {
    super(mention.id);
    this.mention = mention;
  }
}

function MentionsTypeaheadMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option,
  renderMentionOption,
}: {
  index: number;
  isSelected: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  option: MentionTypeaheadOption;
  renderMentionOption?: (mention: Mention, isSelected: boolean) => JSX.Element;
}) {
  return (
    <li
      key={option.key}
      tabIndex={-1}
      className={`item${isSelected ? " selected" : ""}`}
      ref={option.setRefElement}
      role="option"
      aria-selected={isSelected}
      id={`typeahead-item-${index}`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      {renderMentionOption ? (
        renderMentionOption(option.mention, isSelected)
      ) : (
        <>
          <span className="text">{option.mention.displayName}</span>
        </>
      )}
    </li>
  );
}

export default function MentionsPlugin({
  fetchMentions,
  renderMentionOption,
  onMentionSelect,
}: MentionsPluginProps): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const [queryString, setQueryString] = useState<string | null>(null);

  const results = useMentionLookupService(queryString, fetchMentions);

  const checkForSlashTriggerMatch = useBasicTypeaheadTriggerMatch("/", {
    minLength: 0,
  });

const options = useMemo(() => {
  return results
    .map((mention) => new MentionTypeaheadOption(mention))
    .slice(0, SUGGESTION_LIST_LENGTH_LIMIT);
}, [results]);


  const onSelectOption = useCallback(
    (
      selectedOption: MentionTypeaheadOption,
      nodeToReplace: TextNode | null,
      closeMenu: () => void
    ) => {
      editor.update(() => {
        const { mention } = selectedOption;
        const mentionNode = $createMentionNode(selectedOption.mention);
        if (nodeToReplace) {
          nodeToReplace.replace(mentionNode);
        }
        mentionNode.select();
        closeMenu();

        if (onMentionSelect) {
          onMentionSelect(mention);
        }
      });
    },
    [editor, onMentionSelect]
  );

  const checkForMentionMatch = useCallback(
    (text: string) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor);
      return slashMatch !== null ? null : getPossibleQueryMatch(text);
    },
    [checkForSlashTriggerMatch, editor]
  );

  return (
    <LexicalTypeaheadMenuPlugin<MentionTypeaheadOption>
      onQueryChange={setQueryString}
      onSelectOption={onSelectOption}
      triggerFn={checkForMentionMatch}
      options={options}
      menuRenderFn={(
        anchorElementRef,
        { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }
      ) =>
        anchorElementRef.current && results.length
          ? ReactDOM.createPortal(
              <div className="typeahead-popover mentions-menu">
                <ul>
                  {options.map((option, i) => (
                    <MentionsTypeaheadMenuItem
                      key={`${option.key}-${i}`}
                      index={i}
                      isSelected={selectedIndex === i}
                      onClick={() => {
                        setHighlightedIndex(i);
                        selectOptionAndCleanUp(option);
                      }}
                      onMouseEnter={() => {
                        setHighlightedIndex(i);
                      }}
                      option={option}
                      renderMentionOption={renderMentionOption}
                    />
                  ))}
                </ul>
              </div>,
              anchorElementRef.current
            )
          : null
      }
    />
  );
}
