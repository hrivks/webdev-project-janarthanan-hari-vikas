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
    private _content: string; // raw HTML
    private _contentChanged: boolean; // used to keep track of _content to prevent repetative computations
    private _markdown: string; // cache of generated markdown

    /** Get content */
    get content(): string {
        return this._content;
    }

    /** Set content */
    set content(_c: string) {
        if (_c !== this._content) {
            this._content = _c;
            this._contentChanged = true;
        }
    }

    constructor() {
        this.type = MarkdownElementType.text;
        this._content = '';
        this._contentChanged = false;
        this._markdown = '';
    }

    toHtml(): string {
        return this._content;
    }

    toMarkdown(): string {
        if (!this._contentChanged) {
            return this._markdown;
        }

        let markdown = '';
        if (this._content) {
            markdown = this._content;

            // handle bold
            markdown = markdown.replace(/<strong>/g, '**');
            markdown = markdown.replace(/<\/strong>/g, '**');

            // handle italics
            markdown = markdown.replace(/<em>/g, '*');
            markdown = markdown.replace(/<\/em>/g, '*');

            // handle strike
            markdown = markdown.replace(/<s>/g, '~~');
            markdown = markdown.replace(/<\/s>/g, '~~');


            // handle links
            const links = markdown.match(/<a .*?a>/g);
            if (links) {

                links.forEach((m) => {
                    let url = m.match(/href=".*?"/g)[0];
                    if (url) {
                        url = url.replace('href="', '').replace('"', '');
                    } else {
                        url = '';
                    }

                    let text = m.match(/>.*?</g)[0];
                    if (text) {
                        text = text.replace('>', '').replace('<', '');
                    } else {
                        text = '';
                    }

                    const linkMarkdown = '[' + text + '](' + url + ')';
                    markdown = markdown.replace(m, linkMarkdown);
                });
            }

            // handle task list
            markdown = markdown.replace(/<br><i class="fa fa-check-square-o"><\/i>/g, '\n-[X]');
            markdown = markdown.replace(/<br><i class="fa fa-square-o"><\/i>/g, '\n-[ ]');

            // handle bulleted list
            const uls = markdown.match(/<ul.*?ul>/g);
            if (uls) {
                uls.forEach((m) => {
                    let liMarkup = '';
                    const lis = m.match(/<li>.*?<\/li>/g);

                    if (lis) {
                        lis.forEach((l) => {
                            liMarkup += '* ' + l.replace('<li>', '').replace('</li>', '\n');
                        });
                    }

                    markdown = markdown.replace(m, liMarkup);
                });
            }

            // handle numbered list
            const ols = markdown.match(/<ol.*?ol>/g);
            if (ols) {
                ols.forEach((m) => {
                    let liMarkup = '';
                    const lis = m.match(/<li>.*?<\/li>/g);

                    if (lis) {
                        let itemCount = 1;
                        lis.forEach((l) => {
                            liMarkup += itemCount++ + '. ' + l.replace('<li>', '').replace('</li>', '\n');
                        });
                    }

                    markdown = markdown.replace(m, liMarkup);
                });
            }
        }
        this._markdown = markdown;
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
