import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MarkdownElement, MarkdownElementType, MarkdownElementFactory, MarkdownElementHeading } from '../../model/model';
declare var $; // jquery

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

    const e = MarkdownElementFactory.create(MarkdownElementType.heading) as MarkdownElementHeading;
    e._id = 'aa';
    e.content = 'test';
    e.size = 4;

    this.elements.push(e);
  }

  /**
   * Add new markdown element
   * @param type element type
   * @param index index at which the element must be inserted
   */
  addElement(type: MarkdownElementType, index?: number) {
    const newElem = MarkdownElementFactory.create(type);

    if (!index && index >= this.elements.length) {
      this.elements.push(newElem);
    } else {
      this.elements.splice(index + 1, 0, newElem);
    }
  }

  /**
   * Toggle show / hide insert toolbar buttons
   * @param show true, to show; false to hide
   * @param e Mouse event
   */
  toggleInsertToolbar(show: boolean, e: MouseEvent) {
    $(e.srcElement).find('.fade').toggleClass('show', show);
  }

}
