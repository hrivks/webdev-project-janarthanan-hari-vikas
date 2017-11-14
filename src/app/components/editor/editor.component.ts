import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, NgZone } from '@angular/core';
import { concat } from 'rxjs/operator/concat';
declare var $; // jquery
declare var tinymce: any; // tinyMCE editor
declare var toMarkdown: any; // to-markdown

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css', '../../../assets/github-markdown.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditorComponent implements OnInit, AfterViewInit {

  // properties
  private markdownHtml: string;
  private editor: any;
  @ViewChild('inputArea') inputArea: ElementRef;
  @ViewChild('previewTabBody') previewTabBody: ElementRef;
  private activeTab: string;
  private compHeight: number;
  private loadComplete: boolean;

  constructor(private zone: NgZone) {
    this.compHeight = window.innerHeight - 131;
    this.loadComplete = false;
  }

  ngOnInit() {
    this.activeTab = 'preview';
  }

  ngAfterViewInit() {
  }

  onEditorLoad() {
    this.loadComplete = true;
  }

  onEditorChange() {
    const html = this.editor.getContent();

    this.zone.run(() => {
      this.markdownHtml = html;
    });

  }

  getMarkdown() {
    if (this.markdownHtml) {
      return toMarkdown(this.markdownHtml,
        {
          gfm: true,
          converters: [
            {
              filter: 'span',
              replacement: function (content, node) {
                if (node.getAttribute('style') === 'text-decoration: line-through;') {
                  return '~~' + content + '~~';
                } else {
                  return content;
                }

              }
            },
            {
              filter: 'table',
              replacement: function (content, node) {

                // padding for cells
                let cells = content.split('|');
                const largestCell = cells.reduce((r, i) => i.length > r ? i.length : r, 0);
                cells = cells.map((i) => {
                  if (i.length === 0 || i === '\n') {
                    return i;
                  } else {
                    return i + ' '.repeat(largestCell - i.length);
                  }
                });

                content = cells.join('|');

                const firstRow = content.substring(0, content.indexOf('\n', 1));
                const colCount = firstRow.split('|').length - 2;

                let headerRow = '\n';
                const headerCellContent = '-'.repeat(largestCell);
                // check for alignment
                for (let i = 0; i < colCount; i++) {
                  let cellMarkdown = '|' + headerCellContent;
                  if (node.rows[0].cells[i].align === 'right') {
                    cellMarkdown = '|' + headerCellContent.substring(0, largestCell - 1) + ':';
                  } else if (node.rows[0].cells[i].align === 'center') {
                    cellMarkdown = '|:' + headerCellContent.substring(0, largestCell - 2) + ':';
                  }
                  headerRow += cellMarkdown;
                }
                headerRow += '|';

                content = content.replace(firstRow, firstRow + headerRow);
                return content;

              }
            },
            {
              filter: 'pre',
              replacement: function (content, node) {
                if (node.getAttribute('class') && node.getAttribute('class').indexOf('language-') > -1) {
                  let lang = node.getAttribute('class').replace('language-', '');
                  lang = lang === 'NA' ? '' : lang;
                  return '```' + (lang || '') + '\n' + content.replace('<code>', '').replace('</code>', '') + '\n```';
                } else {
                  return content;
                }
              }
            },
            {
              filter: 'img',
              replacement: function (content, node) {

                const src = $(node).attr('src');
                const alt = $(node).attr('alt');
                const emoji = $(node).attr('data-emoji');

                if (emoji) {
                  return ':' + emoji + ':';
                } else {
                  return '![' + (alt || '') + '](' + (src || '') + ')';
                }

              }
            }
          ]
        });
    } else {
      return '';
    }

  }

}
