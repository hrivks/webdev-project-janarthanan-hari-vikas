import { IAppEntity } from './IAppEntity';

/** Models a User object */
export class User implements IAppEntity {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email?: string;
}

// Re-exports
export { MarkdownElement } from './markdownElement';
export { MarkdownElementType } from './markdownElementType';
export { MarkdownElementFactory } from './MarkdownElementFactory';
export { MarkdownElementText } from './markdownElementText';
export { MarkdownElementHeading } from './markdownElementHeading';
export { MarkdownElementLine } from './markdownElementLine';

