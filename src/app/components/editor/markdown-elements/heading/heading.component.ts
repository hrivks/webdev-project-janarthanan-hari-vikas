import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownElement } from '../../../../model/model';

@Component({
  selector: 'app-markdown-heading-edit',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  // properties
  @Input() public markdown: MarkdownElement;
  @Output() public markdownChange: EventEmitter<MarkdownElement> = new EventEmitter<MarkdownElement>();

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.markdownChange.emit(this.markdown);
  }

}
