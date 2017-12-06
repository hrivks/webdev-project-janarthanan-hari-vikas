import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../services/project.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';
import { AuthService } from '../../../services/auth.service.client';
import { User } from '../../../model/model';

@Component({
  selector: 'app-new-project',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class NewProjectComponent implements OnInit {

  // properties
  @ViewChild('newProjectForm') newProjectForm: NgForm;
  private name: string;
  private members: User[];
  private admins: User[];
  private loggedInUser: User;

  private inProgress: boolean;

  constructor(private router: Router,
    private projectService: ProjectService,
    private interactionService: InteractionsService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (!this.loggedInUser) {
      this.interactionService.showAlert('You must be logged in to view this page');
    }
  }

  /** Create project */
  createProject() {
    if (this.inProgress) {
      return;
    }

    if (this.newProjectForm.invalid) {
      // touch controls to highlight validation
      this.newProjectForm.controls.name.markAsTouched({ onlySelf: true });
      return;
    }

    const project = {
      name: this.name,
      members: this.members.map(u => u._id),
      admins: this.admins.map(u => u._id)
    };

    this.interactionService.showLoader(true);
    this.projectService.createProject(project)
      .subscribe((createdProject) => {
        this.interactionService.showLoader(false);
        this.router.navigate(['/projects']);
      }, (err) => {
        this.errorHandlerService.handleError('Error creating project', err);
      });

  }

}
