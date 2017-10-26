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
            markdown = this.content;

            // handle bold
            markdown = markdown.replace(/<strong>/g, '**');
            markdown = markdown.replace(/<\/strong>/g, '**');

            // handle italics
            markdown = markdown.replace(/<em>/g, '*');
            markdown = markdown.replace(/<\/em>/g, '*');

            // handle strike
            markdown = markdown.replace(/<s>/g, '~~');
            markdown = markdown.replace(/<\/s>/g, '~~');

            // handle task list
            markdown = markdown.replace(/<br><i class="fa fa-check-square-o"><\/i>/g, '\n-[X]');
            markdown = markdown.replace(/<br><i class="fa fa-square-o"><\/i>/g, '\n-[ ]');

            // handle bulleted list
            let startIndex = markdown.indexOf('<ul');
            let endIndex = 0;
            while (startIndex > -1) {
                endIndex = markdown.indexOf('/ul>');
                const ulHtml = markdown.substring(startIndex, endIndex);
                const bulletedMarkdown = ulHtml.replace('<ul>', '')
                    .replace('</ul>', '')
                    .replace(/<li>/g, '*')
                    .replace(/<\/li>/g, '*');
                markdown.replace(ulHtml, bulletedMarkdown);
                startIndex = markdown.indexOf('<ul', endIndex);
            }

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
