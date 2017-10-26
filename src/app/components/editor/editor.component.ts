import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownElement, MarkdownElementType } from '../../model/model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit {

  // properties
  private elements: MarkdownElement[]; // list of markdown elements on the page
  private MarkdownElementType = MarkdownElementType;

  constructor() { }

  ngOnInit() {
    this.elements = [];

    const e = new MarkdownElement(MarkdownElementType.heading);
    e._id = 'aa';
    e.content = 'test';
    e.attribute = 4;

    this.elements.push(e);
  }

  addElement(type: MarkdownElementType, index?: number) {
    const newElem = new MarkdownElement(type);
    newElem.type = type;

    if (!index && index >= this.elements.length) {
      this.elements.push(newElem);
    } else {
      this.elements.splice(index + 1, 0, newElem);
    }
  }

}
