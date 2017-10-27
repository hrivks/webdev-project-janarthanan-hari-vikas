import { MarkdownElementType } from './markdownElementType';
import { IAppEntity } from './IAppEntity';

/** Models common properties of a markdown element */
export interface MarkdownElement extends IAppEntity {
    _id: string;
    type: MarkdownElementType | string;
    content: string;

    /**
     * Get HTML of markdown
     */
    toHtml(): string;

    /**
     * Get markdown
     */
    toMarkdown(): string;
}
