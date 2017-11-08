import { Component, OnInit, Input } from '@angular/core';
declare var $;

@Component({
  selector: 'app-insert-image',
  templateUrl: './insert-image.component.html',
  styleUrls: ['./insert-image.component.css']
})
export class InsertImageComponent implements OnInit {

  // properties
  @Input() submitTrigger: { trigger: () => any };
  private img: any;
  private aspectRatioLocked: boolean;

  constructor() {
    this.aspectRatioLocked = true;
    this.img = {};
  }

  ngOnInit() {
    if (this.submitTrigger) {
      this.submitTrigger.trigger = this.submit;
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

  toggleCustomSize() {
    this.img.customSize = !this.img.customSize;
    if (this.img.customSize) {
      this.makeResizable();
    } else {
      this.removeResizable();
    }
  }

  submit() {
    console.log('submit in insert-image');

  }

}
