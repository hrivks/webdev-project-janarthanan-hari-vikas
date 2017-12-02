import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from '../app.constant';
import { AuthService } from './auth.service.client';

@Injectable()
export class GitHubService {
    // properties

    api = {
        'getRepos': this.getRepos,
        'commit': this.commit
    };

    endpoint = {
        'getRepos': 'https://api.github.com/user/repos',
        'getRef': 'https://api.github.com/repos/{repo}/git/refs/heads/{branch}',
        'blob': 'https://api.github.com/repos/{repo}/git/blobs',
        'createTree': 'https://api.github.com/repos/{repo}/git/trees',
        'createCommit': 'https://api.github.com/repos/{repo}/git/commits'
    };

    constructor(private http: HttpClient,
        private authService: AuthService) { }

    /**
     * Get Users GitHub Repository Names
     * @returns {Observable<string[]>} Observable that resolves to the list of GitHub repositories of the user
     */
    getRepos(): Observable<string[]> {

        const obs = new Observable<string[]>((observer) => {
            const loggedInUser = this.authService.getLoggedInUser();
            if (loggedInUser.github && loggedInUser.github.token) {
                this.http.get(this.endpoint.getRepos, { headers: { 'Authorization': 'token ' + loggedInUser.github.token } })
                    .subscribe((data: any[]) => {

                        let repos = [];
                        if (data && data.length) {
                            repos = data.map((i) => i.full_name);
                        }
                        observer.next(repos);
                        observer.complete();

                    }, (err) => {
                        observer.error(err);
                    });
            } else {
                observer.error('Git Token unavailable. Login to GitHub and try again');
            }

        });

        return obs;
    }


    commit(repo: string, branch: string, file: string, commitMessage: string): Observable<boolean> {

        const obs = new Observable<boolean>((observer) => {
            const loggedInUser = this.authService.getLoggedInUser();
            if (loggedInUser.github && loggedInUser.github.token) {
                const headers = { headers: { 'Authorization': 'token ' + loggedInUser.github.token } };

                // get reference to Head
                const headRefUrl = this.endpoint.getRef.replace('{repo}', repo).replace('{branch}', branch);
                this.http.get(headRefUrl, headers)
                    .subscribe((headRefdata: any) => {
                        const headInfo = headRefdata.object;

                        // get commit info
                        this.http.get(headInfo.url, headers)
                            .subscribe((commitData: any) => {
                                const treeInfo = commitData.tree;

                                // post file to server
                                const blobUrl = this.endpoint.blob.replace('{repo}', repo);
                                this.http.post(blobUrl, { content: file }, headers)
                                    .subscribe((blobData: any) => {
                                        const blobInfo = blobData;

                                        // create new tree
                                        const createTreeUrl = this.endpoint.createTree.replace('{repo}', repo);
                                        const newTree = {
                                            base_tree: treeInfo.sha,
                                            tree: [{
                                                path: 'ABCD.md',
                                                mode: '100644',
                                                type: 'blob',
                                                sha: blobInfo.sha
                                            }]
                                        };

                                        this.http.post(createTreeUrl, newTree, headers)
                                            .subscribe((createdTreeData: any) => {

                                                // create commit
                                                const newCommit = {
                                                    message: commitMessage,
                                                    tree: createdTreeData.sha,
                                                    parents: [treeInfo.sha]
                                                };
                                                const createCommitUrl = this.endpoint.createCommit.replace('{repo}', repo);
                                                this.http.post(createCommitUrl, newCommit, headers)
                                                    .subscribe((createdCommit: any) => {

                                                        // update head
                                                        this.http.patch(headRefUrl, { sha: createdCommit.sha }, headers)
                                                            .subscribe((result) => {
                                                                observer.next(true);
                                                                observer.complete();
                                                            }, (err) => {
                                                                observer.error(err);
                                                            });

                                                    }, (err) => {
                                                        observer.error(err);
                                                    });

                                            }, (err) => {
                                                observer.error(err);
                                            });


                                    }, (err) => {
                                        observer.error(err);
                                    });

                            }, (err) => {
                                observer.error(err);
                            });

                    }, (err) => {
                        observer.error(err);
                    });
            } else {
                observer.error('Git Token unavailable. Login to GitHub and try again');
            }

        });

        return obs;

    }

}
