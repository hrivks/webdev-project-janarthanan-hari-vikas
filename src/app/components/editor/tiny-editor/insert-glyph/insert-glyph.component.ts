import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ComponentControl } from '../../../../model/ui-model';
import faIconsList from '../../../../model/fontawesome-icons-list';

@Component({
  selector: 'app-insert-glyph',
  templateUrl: './insert-glyph.component.html',
  styleUrls: ['./insert-glyph.component.css']
})
export class InsertGlyphComponent implements OnInit, OnChanges {

  // properties
  @Input() compControl: ComponentControl;
  @Output() onSubmit: EventEmitter<string> = new EventEmitter<string>();
  private selectedSize: number | string;
  private selectedGlyph: string;
  private faIconsList: string[];

  constructor() {

    this.faIconsList = faIconsList;
    this.selectedSize = 'sm';

  }

  ngOnInit() {

    if (this.compControl) {
      this.compControl.submit = () => this.submit();
    }

  }

  ngOnChanges() {

    if (this.compControl) {
      this.compControl.submit = () => this.submit();
    }

  }

  selectIcon(ico: string) {

    this.selectedGlyph = ico;
    this.submit();

  }

  submit() {

  }


}
