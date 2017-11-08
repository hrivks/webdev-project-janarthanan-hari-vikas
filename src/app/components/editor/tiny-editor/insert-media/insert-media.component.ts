import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insert-media',
  templateUrl: './insert-media.component.html',
  styleUrls: ['./insert-media.component.css']
})
export class InsertMediaComponent implements OnInit {

  // properties
  @Input() data: { type: string, content: any };
  @Input() compHeight: number | string;
  private subComponents: any;

  constructor() {
    this.subComponents = {
      insertImage: {
        submit: {}
      }
    };

  }

  ngOnInit() {
  }

  submit() {
    this.subComponents.insertImage.submit.trigger();
  }

}
