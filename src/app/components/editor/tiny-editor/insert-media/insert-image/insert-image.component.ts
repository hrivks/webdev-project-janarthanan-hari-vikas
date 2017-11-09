import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ComponentControl } from '../../../../../model/ui-model';
declare var $;

@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['./insert-image.component.css']
})
export class InsertImageComponent implements OnInit, OnChanges {

  // properties
  @Input() compControl: ComponentControl;
  private img: any;
  private aspectRatioLocked: boolean;

  constructor() {
    this.aspectRatioLocked = true;
    this.img = {};
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.compControl) {
      this.compControl.submit = () => this.submit();
      this.compControl.reset = () => this.reset();
    }
  }

  /** Remove resizable option from selected image */
  removeResizable() {
    if ($('#preview-img').parent().draggable('instance')) {
      $('#preview-img').parent().draggable('destroy');
    }
    if ($('#preview-img').resizable('instance')) {
      $('#preview-img').resizable('destroy');
    }
    $('#preview-img').parent().removeAttr('style');
    $('#preview-img').removeAttr('style');
  }

  /** Make selected image resizable */
  makeResizable() {
    this.removeResizable();
    $('#preview-img').height('50%');
    $('#preview-img').resizable({
      containment: 'parent',
      aspectRatio: this.aspectRatioLocked,
      handles: ' n, e, s, w, ne, se, sw, nw',
      maxHeight: 500,
      create: () => {
        $('#preview-img').parent().draggable({
          containment: 'parent',
          create: () => {
            $('#preview-img').parent().css('top', '0');
            $('#preview-img').parent().css('left', '0');
          }
        });
      }
    });
  }

  /** Toggle aspec ratio lock on resizable image */
  toggleAspectRatioLock() {

    this.aspectRatioLocked = !this.aspectRatioLocked;
    this.makeResizable();

  }

  /** Toggle image size resizability */
  toggleCustomSize() {

    this.img.customSize = !this.img.customSize;
    if (this.img.customSize) {
      this.makeResizable();
    } else {
      this.removeResizable();
    }

  }

  /** Return data */
  submit(): { url: string, title: string } {

    let url = this.img.url;
    if (this.img.customSize) {
      url = 'https://rsz.io/' + url.replace('https://', '').replace('http://', '');
      const width = Math.round($('#preview-img').width());
      const height = Math.round($('#preview-img').height());
      const queryStringDelimitor = url.indexOf('?') > -1 ? '&' : '?';
      url += queryStringDelimitor + 'w=' + width + '&h=' + height + '&format=png';
    }

    return { url: url, title: this.img.title || '' };

  }

  /** Reset form */
  reset() {
    this.img = {};
  }


}
