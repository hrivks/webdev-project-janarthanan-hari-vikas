import { MarkdownElement } from './markdownElement';
import { MarkdownElementType } from './markdownElementType';

/** Models a markdown Heading element */
export class MarkdownElementLine implements MarkdownElement {

    _id: string;
    type: MarkdownElementType | string;
    size: number;
    content: string;

    constructor() {
        this.type = MarkdownElementType.line;
        this.content = '';
    }

    toHtml(): string {
        return '<hr>';
    }

    toMarkdown(): string {
        return '***';
    }
}
