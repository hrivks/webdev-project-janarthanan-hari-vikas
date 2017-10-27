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
