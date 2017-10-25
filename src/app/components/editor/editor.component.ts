import { Component, OnInit } from '@angular/core';
import { MarkdownElement, MarkdownElementType } from '../../model/model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // properties
  private elements: MarkdownElement[]; // list of markdown elements on the page

  constructor() { }

  ngOnInit() {
    this.elements = [];
    this.elements.push({
      _id: 'adfads',
      type: MarkdownElementType.heading,
      attribute: 2,
      content: 'test'
    });
  }

}
