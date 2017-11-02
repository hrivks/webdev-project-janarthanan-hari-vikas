import { Component, OnInit } from '@angular/core';
import { IconSearchService } from '../../../../services/iconsearch.service.client';

@Component({
  selector: 'app-icon-search',
  templateUrl: './icon-search.component.html',
  styleUrls: ['./icon-search.component.css']
})
export class IconSearchComponent implements OnInit {

  // properties
  private keyword: string;
  private err: string;
  private searchResultIcons: string[];
  private searchCount: number;
  private currentPage: number;

  constructor(private iconSearchService: IconSearchService) {
    this.searchResultIcons = [];
    this.searchCount = 0;
  }

  ngOnInit() {
  }

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

}
