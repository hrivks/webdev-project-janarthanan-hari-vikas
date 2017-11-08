import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editor-insert-code',
  templateUrl: './insert-code.component.html',
  styleUrls: ['./insert-code.component.css']
})
export class InsertCodeComponent implements OnInit {

  // properties
  @Input() data: { code: string, lang: string };
  @Input() compHeight: number | string;

  constructor() {
    this.compHeight = this.compHeight || 200;
  }

  ngOnInit() {
    if (!this.data) {
      this.data = { code: '', lang: '' };
    }
  }
}
