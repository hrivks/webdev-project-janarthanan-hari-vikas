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
