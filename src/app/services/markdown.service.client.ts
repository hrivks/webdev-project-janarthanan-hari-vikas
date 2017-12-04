import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Markdown } from '../model/model';
import { AppConstants } from '../app.constant';

@Injectable()
export class MarkdownService {

    api = {
        'createMarkdown': this.createMarkdown,
        'findMarkdownById': this.findMarkdownById,
        'findMarkdownsByAuthor': this.findMarkdownsByAuthor,
        'updateMarkdown': this.updateMarkdown,
        'deleteMarkdown': this.deleteMarkdown
    };

    endpoint = {
        'createMarkdown': AppConstants.ENDPOINT.baseUrl + '/markdown',
        'findMarkdownById': AppConstants.ENDPOINT.baseUrl + '/markdown/{markdownId}',
        'findMarkdownsByAuthor': AppConstants.ENDPOINT.baseUrl + '/markdown/byAuthor/{authorId}',
        'updateMarkdown': AppConstants.ENDPOINT.baseUrl + '/markdown/{markdownId}',
        'deleteMarkdown': AppConstants.ENDPOINT.baseUrl + '/markdown/{markdownId}'
    };

    constructor(private http: HttpClient) { }

    /**
     * Create a new markdown
     * @param markdown markdown object to create
     * @returns Observable that resolves to the created markdown
     */
    createMarkdown(markdown: Markdown): Observable<Markdown> {
        return this.http.post<Markdown>(this.endpoint.createMarkdown, markdown, { withCredentials: true });
    }

    /**
     * Find markdown by markdown id
     * @param markdownId id of the markdown
     * @returns Observable that resolves to markdown with the specifed id; null if id doesn't exist
     */
    findMarkdownById(markdownId: string): Observable<Markdown> {
        const url = this.endpoint.findMarkdownById.replace('{markdownId}', markdownId);
        return this.http.get<Markdown>(url);
    }

    /**
     * Find markdown by markdown name
     * @param markdownname markdownname of the markdown
     * @returns Observable that resolves to markdown with the specifed markdownname; null if id doesn't exist
     */
    findMarkdownsByAuthor(authorId: string): Observable<Markdown[]> {
        const url = this.endpoint.findMarkdownsByAuthor.replace('{authorId}', authorId);
        return this.http.get<Markdown[]>(url);
    }

    /**
     * Update markdown by markdown id
     * @param {string} markdownId id of the markdown
     * @param markdown updated markdown object
     * @returns Observable that resolves to updated markdown object
     */
    updateMarkdown(markdownId: string, markdown: Markdown): Observable<Markdown> {
        const url = this.endpoint.updateMarkdown.replace('{markdownId}', markdownId);
        return this.http.put<Markdown>(url, markdown);
    }

    /**
     * Delete markdown by markdown id
     * @param {string} markdownId id of the markdown
     * @returns Observable that resolves to deleted markdown object
     */
    deleteMarkdown(markdownId: string): Observable<Markdown> {
        const url = this.endpoint.deleteMarkdown.replace('{markdownId}', markdownId);
        return this.http.delete<Markdown>(url);
    }
}
