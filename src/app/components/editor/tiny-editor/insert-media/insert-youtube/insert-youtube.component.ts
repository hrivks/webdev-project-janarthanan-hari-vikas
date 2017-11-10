import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ComponentControl } from '../../../../../model/ui-model';
import { UtilService } from '../../../../../services/utils.service.client';
declare var $;

@Component({
  selector: 'app-insert-youtube',
  templateUrl: './insert-youtube.component.html',
  styleUrls: ['./insert-youtube.component.css']
})
export class InsertYoutubeComponent implements OnInit, OnChanges {

  // properties
  @Input() compControl: ComponentControl;
  private img: any;
  private aspectRatioLocked: boolean;

  constructor(private utilService: UtilService) {

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

  /** Get Img url of the video */
  getImgUrl() {

    if (this.img.videoUrl && this.img.videoUrl.indexOf('v=') > -1) {
      const videoId = this.img.videoUrl.split('v=')[1];
      if (videoId) {
        return 'http://img.youtube.com/vi/{videoId}/0.jpg'.replace('{videoId}', videoId);
      }
    } else {
      return '';
    }

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
  submit(): { url: string, videoUrl: string, title: string } {

    let url = this.getImgUrl();
    if (this.img.customSize) {
      const width = $('#preview-img').width();
      const height = $('#preview-img').height();

      url = this.utilService.getResizedImgUrl(url, width, height);
    }

    return { url: url, videoUrl: this.img.videoUrl, title: this.img.title || '' };

  }

  /** Reset form */
  reset() {

    this.img = {};

  }
}
