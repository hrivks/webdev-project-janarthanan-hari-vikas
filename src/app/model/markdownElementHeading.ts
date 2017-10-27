import { MarkdownElement } from './markdownElement';
import { MarkdownElementType } from './markdownElementType';

/** Models a markdown Heading element */
export class MarkdownElementHeading implements MarkdownElement {

    _id: string;
    type: MarkdownElementType | string;
    size: number;
    content: string;

    constructor() {
        this.type = MarkdownElementType.heading;
        this.size = 1;
        this.content = '';
    }

    toHtml(): string {
        let html = '';

        if (this.content) {
            html = '<h' + (this.size || 1) + '>' + this.content + '</h' + (this.size || 1) + '>';
        }

        return html;
    }

    toMarkdown(): string {
        let markdown = '';
        const size = this.size || 1;
        markdown += '#'.repeat(size);
        markdown += this.content;
        return markdown;
    }
}
