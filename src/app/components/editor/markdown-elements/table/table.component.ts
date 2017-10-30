import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MarkdownElementTable } from '../../../../model/model';
declare var $: any;

@Component({
  selector: 'app-markdown-table-edit',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableEditComponent implements OnInit {

  // properties
  @Input() public markdown: MarkdownElementTable;
  @Output() public markdownChange: EventEmitter<MarkdownElementTable> = new EventEmitter<MarkdownElementTable>();

  private cells: { value: string, alignmment?: string }[][];
  private colCount: number;
  private rowCount: number;

  constructor() { }

  ngOnInit() {
    if (this.markdown.tableUiData) {
      this.rowCount = this.markdown.tableUiData.length;
      if (this.markdown.tableUiData[0]) {
        this.colCount = this.markdown.tableUiData[0].length;
      }
    }

    if (this.rowCount === 0) {
      // empty table markdown. initialize with 2 empty rows and columns
      this.markdown.tableUiData = [[{ value: '' }, { value: '' }], [{ value: '' }, { value: '' }]];
    }
  }

  onChange() {
    this.markdownChange.emit(this.markdown);
  }

  /** Add a new column
   * @param index index at which to create the new column. If unspecified, column is created at the end
   */
  addColumn(index?: number) {
    if (index) {

    } else {
      // add column at end
      this.markdown.tableUiData.forEach(r => {
        r.push({ value: '' });
      });
    }
    this.colCount++;
  }

  /** Add a new row
   * @param index index at which to create the new row. If unspecified, row is created at the end
   */
  addRow(index?: number) {
    if (index) {

    } else {
      // add row at end
      const newRow: { value: string }[] = [];
      for (let i = 0; i < this.colCount; i++) {
        newRow.push({ value: '' });
      }

      this.markdown.tableUiData.push(newRow);
    }
    this.rowCount++;
  }

}
