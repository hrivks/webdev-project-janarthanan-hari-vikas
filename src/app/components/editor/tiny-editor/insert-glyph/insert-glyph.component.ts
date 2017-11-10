import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ComponentControl } from '../../../../model/ui-model';


@Component({
  selector: 'app-insert-glyph',
  templateUrl: './insert-glyph.component.html',
  styleUrls: ['./insert-glyph.component.css']
})
export class InsertGlyphComponent implements OnInit, OnChanges {

  // properties
  @Input() compControl: ComponentControl;
  private selectedSize: number;
  private selectedGlyph: string;

  constructor() { }

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

  submit() {

  }

}
