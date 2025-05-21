import type { JSX } from "react";
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
export default function MentionsPlugin({ fetchMentions, renderMentionOption, onMentionSelect, }: MentionsPluginProps): JSX.Element | null;
export {};
