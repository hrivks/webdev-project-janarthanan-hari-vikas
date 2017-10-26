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

/** Models a markdown element */
export class MarkdownElement implements IAppEntity {
    _id: string;
    type: MarkdownElementType | string;
    attribute: string | number;
    content: string;

    constructor(type: MarkdownElementType) {
        this.type = type;

        switch (this.type) {
            case MarkdownElementType.heading:
                this.attribute = 1;
                break;
        }
    }

    /**
     * Get HTML of markup
     */
    toHtml(): string {

        let html = '';
        if (this.content) {
            switch (this.type) {
                case MarkdownElementType.heading:
                    html = '<h' + (this.attribute || 1) + '>' + this.content + '</h' + (this.attribute || 1) + '>';
                    break;
            }
        }

        return html;
    }

    /**
     * Get markdown
     */
    toMarkdown(): string {

        let markdown = '';

        if (this.content) {
            switch (this.type) {
                case MarkdownElementType.heading:
                    const size = this.attribute || 1;
                    for (let i = 0; i < this.attribute; i++) {
                        markdown += '#';
                    }
                    markdown += this.content;
                    break;
            }
        }

        return markdown;
    }

    /**
     * set defaults specific to type
     */
    setDefaults(): void {
        switch (this.type) {
            case MarkdownElementType.heading:
                this.attribute = 1;
                break;
        }
    }

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
