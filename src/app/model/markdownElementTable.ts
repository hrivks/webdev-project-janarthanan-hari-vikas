import { MarkdownElement } from './markdownElement';
import { MarkdownElementType } from './markdownElementType';


export class MarkdownElementTable implements MarkdownElement {

    _id: string;
    type: MarkdownElementType | string;
    private _content: string; // preview HTML
    private _contentChanged: boolean; // used to keep track of _content to prevent repetative computations
    private _markdown: string; // cache of generated markdown
    tableUiData: { value: string }[][]; // UI table data matrix

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
        this.type = MarkdownElementType.table;
        this._content = '';
        this._markdown = '';
        this.tableUiData = [];
        this._contentChanged = false;
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
        }
        this._markdown = markdown;
        return markdown;
    }
}
