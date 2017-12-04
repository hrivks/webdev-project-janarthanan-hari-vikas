import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProjectService } from '../../../services/project.service.client';
import { InteractionsService } from '../../../services/interactions.service.client';
import { ErrorHandlerService } from '../../../services/error-handler.service.client';

@Component({
  selector: 'app-new-project',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewProjectComponent implements OnInit {

  // properties
  @ViewChild('newProjectForm') newProjectForm: NgForm;
  private name: string;
  private members: string[];

  private inProgress: boolean;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private interactionsService: InteractionsService,
    private errorHandlerService: ErrorHandlerService) { }

  ngOnInit() {
  }

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
      name: this.name
    };

    this.interactionsService.showLoader(true);
    this.projectService.createProject(project)
      .subscribe((createdProject) => {
        this.interactionsService.showLoader(false);
        this.router.navigate(['/project', createdProject._id]);
      }, (err) => {
        this.errorHandlerService.handleError('Error creating project', err);
      });

  }


}
