import { MarkdownElement } from './markdownElement';
import { MarkdownElementType } from './markdownElementType';
import { MarkdownElementHeading } from './markdownElementHeading';
import { MarkdownElementText } from './markdownElementText';

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
