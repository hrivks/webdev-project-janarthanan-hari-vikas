/** Common properties of all model objects */
export interface IAppEntity {
    _id: string;
}

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email?: string;
}

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

/** Types of markdown elements supported */
export enum MarkdownElementType {
    heading, // headings: h1, h2,...h6
    text, // plain text
    line, // horizontal line
    list, // ordered and unordered list, task list
    image, // image
    code, // code
    blockquote, // quotes
    table, // table
    html // plain html
}

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

export class MarkdownElementText implements MarkdownElement {

    _id: string;
    type: MarkdownElementType | string;
    content: string; // raw HTML

    constructor() {
        this.type = MarkdownElementType.text;
        this.content = '';
    }

    toHtml(): string {
        return this.content || '';
    }

    toMarkdown(): string {
        let markdown = '';
        if (this.content) {
            markdown += this.content;
        }
        return markdown;
    }
}

/** Factory for creating markdown elements based on type */
export class MarkdownElementFactory {
    static create(type: MarkdownElementType): MarkdownElement {
        switch (type) {
            case MarkdownElementType.heading:
                return new MarkdownElementHeading();
            case MarkdownElementType.text:
                return new MarkdownElementText();
        }
    }
}
