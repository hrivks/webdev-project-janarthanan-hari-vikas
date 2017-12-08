import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.client';
import { ProjectService } from '../../services/project.service.client';
import { Project, User, Markdown } from '../../model/model';
import { InteractionsService } from '../../services/interactions.service.client';
import { ErrorHandlerService } from '../../services/error-handler.service.client';
import { UserService } from '../../services/user.service.client';
import { MarkdownService } from '../../services/markdown.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // properties
  private isSiteAdmin: boolean;
  private projects: Project[];
  private users: User[];
  private me: User;
  private newProjectName: string;
  private newUserName: string;
  private newUserPassword: string;
  private newlyCreatedProject: Project;
  private newlyCreatedUser: User;

  constructor(private authService: AuthService,
    private projectService: ProjectService,
    private userService: UserService,
    private markdownService: MarkdownService,
    private interactionService: InteractionsService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
    this.me = this.authService.getLoggedInUser();
    if (this.me.isSiteAdmin) {
      this.isSiteAdmin = true;

      this.projectService.getAllProjects()
        .subscribe((projects) => {
          this.projects = projects;
        }, (err) => {
          this.errorHandlerService.handleError('Error getting list of all projects', err);
        });

      this.userService.getAllUsers()
        .subscribe((users) => {
          this.users = users.filter((i) => i._id !== this.me._id);
        }, (err) => {
          this.errorHandlerService.handleError('Error getting list of all users', err);
        });

    }
  }

  /** Create a new project */
  createProject() {
    if (!this.newProjectName) {
      this.interactionService.showAlert('Project name cannot be empty', 'danger', true);
      return;
    }

    const newMarkdown: Markdown = {
      content: ''
    };
    this.markdownService.createMarkdown(newMarkdown)
      .subscribe((createdMarkdown) => {
        // create project and associate with created markdown
        const project: Project = {
          name: this.newProjectName,
          fileName: 'README.md',
          markdown: createdMarkdown._id
        };
        this.projectService.createProject(project)
          .subscribe((createdProject) => {
            this.newProjectName = '';
            this.projects.push(createdProject);
            this.newlyCreatedProject = createdProject;
            this.interactionService.showAlert('Project created successfully', 'success', true);
          }, (err) => {
            this.errorHandlerService.handleError('Error creating project', err);
          });

      }, (err) => {
        this.errorHandlerService.handleError('Error creating project markdown', err);
      });
  }

  /** Create new user */
  createUser() {

    if (!this.newUserName || !this.newUserPassword) {
      this.interactionService.showAlert('Username or password cannot be empty', 'danger', true);
      return;
    }

    if (this.users.find((i) => i.username === this.newUserName)) {
      this.interactionService.showAlert('Username already exists', 'danger', true);
      return;
    }

    this.userService.createUser(this.newUserName, this.newUserPassword)
      .subscribe((createdUser) => {
        this.newUserName = '';
        this.newUserPassword = '';
        this.users.push(createdUser);
        this.newlyCreatedUser = createdUser;
        this.interactionService.showAlert('User created successfully', 'success', true);
      }, (err) => {
        this.errorHandlerService.handleError('Error creating new user', err);
      });

  }

}
