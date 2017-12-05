import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../services/project.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { User, Project } from '../../../model/model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class EditProjectComponent implements OnInit {

  // properties
  @ViewChild('editProjectForm') editProjectForm: NgForm;
  private name: string;
  private members: User[];
  private admins: User[];
  private loggedInUser: User;
  private project: Project;

  private inProgress: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private interactionService: InteractionsService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (!this.loggedInUser) {
      this.interactionService.showAlert('You must be logged in to view this page');
    } else {
      this.activatedRoute.params.subscribe((params: any) => {
        this.projectService.findProjectById(params.projectId)
          .subscribe((project) => {
            console.log(project);
            this.project = project;
            this.name = this.project.name;
            this.members = this.project.members.map((i) => ({ _id: i.toString() }));
            this.admins = this.project.admins.map((i) => ({ _id: i.toString() }));
          }, (err) => {
            this.errorHandlerService.handleError('Error getting project', err);
          });
      });
    }
  }

  /** Update project */
  updateProject() {
    if (this.inProgress) {
      return;
    }

    if (this.editProjectForm.invalid) {
      // touch controls to highlight validation
      this.editProjectForm.controls.name.markAsTouched({ onlySelf: true });
      return;
    }

    this.project.name = this.name;
    this.project.members = this.members.map(u => u._id);
    this.project.admins = this.admins.map(u => u._id);

    this.interactionService.showLoader(true);
    this.projectService.updateProject(this.project._id, this.project)
      .subscribe((createdProject) => {
        this.interactionService.showLoader(false);
        this.router.navigate(['/project', createdProject._id]);
      }, (err) => {
        this.errorHandlerService.handleError('Error updating project', err);
      });

  }

}
