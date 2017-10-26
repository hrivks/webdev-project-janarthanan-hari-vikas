import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownElementHeading } from '../../../../model/model';

@Component({
  selector: 'app-markdown-heading-edit',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingEditComponent implements OnInit {

  // properties
  @Input() public markdown: MarkdownElementHeading;
  @Output() public markdownChange: EventEmitter<MarkdownElementHeading> = new EventEmitter<MarkdownElementHeading>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.markdownChange.emit(this.markdown);
  }

}
