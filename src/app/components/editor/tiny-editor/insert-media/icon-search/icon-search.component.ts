import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconSearchService } from '../../../../../services/iconsearch.service.client';
declare var $: any;

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IconSearchComponent implements OnInit {

  // properties
  private keyword: string;
  private err: string;
  private searchResultIcons: string[];
  private searchCount: number;
  private currentPage: number;
  private selectedImg: any;
  private aspectRatioLocked: boolean;

  constructor(private iconSearchService: IconSearchService) {
    this.searchResultIcons = [];
    this.searchCount = 0;
    this.aspectRatioLocked = true;
  }

  ngOnInit() {
  }

  /** Search for images */
  search() {
    if (!this.keyword) {
      return;
    }
    this.iconSearchService.search(this.keyword)
      .subscribe(
      (result) => {
        this.searchResultIcons = result.icons;
        this.searchCount = result.count;
        console.log(result);

      },
      (e) => {
        this.err = 'Oops! Icon search is acting up again!';
        console.error('Error searching for icons.', e);
      }
      );
  }

  /**
   * Select an image
   * @param img selected image object
   */
  selectImg(img) {
    this.removeResizable();
    this.selectedImg = img;
    this.selectedImg.selectedUrl = img.sizes[Math.floor(img.sizes.length * 0.75)].url;
    this.selectedImg.selectedSize = img.sizes[Math.floor(img.sizes.length * 0.75)].size;
  }

  /**
   * change size of selected image
   * @param size selected size object
   */
  selectSize(size: any | string) {
    if (size === 'custom') {
      this.makeResizable();
      this.selectedImg.selectedUrl = this.selectedImg.sizes[this.selectedImg.sizes.length - 1].url;
      this.selectedImg.selectedSize = 'custom';
    } else {
      this.selectedImg.selectedUrl = size.url;
      this.selectedImg.selectedSize = size.size;
      this.removeResizable();
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

  /** submit the selected image */
  submit(): { url: string, title: string } {
    if (this.selectedImg.selectedSize === 'custom') {
      let url = 'https://rsz.io/' + this.selectedImg.selectedUrl.replace('https://', '').replace('http://', '');
      const width = Math.round($('#preview-img').width());
      const height = Math.round($('#preview-img').height());
      const queryStringDelimitor = url.indexOf('?') > -1 ? '&' : '?';
      url += queryStringDelimitor + 'w=' + width + '&h=' + height + '&format=png';

      console.log(url);

      return { url: url, title: this.selectedImg.title };

    } else {
      return null;
    }
  }


}
