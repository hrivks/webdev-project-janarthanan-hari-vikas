import { MarkdownElement } from './markdownElement';
import { MarkdownElementType } from './markdownElementType';


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
