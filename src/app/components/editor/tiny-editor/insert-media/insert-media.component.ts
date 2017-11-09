import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ComponentControl } from '../../../../model/ui-model';

@Component({
  selector: 'app-insert-media',
  templateUrl: './insert-media.component.html',
  styleUrls: ['./insert-media.component.css']
})
export class InsertMediaComponent implements OnInit, OnChanges {

  // properties
  @Input() compControl: ComponentControl;
  private subComponents: { [key: string]: ComponentControl };
  private openComponent: string;

  constructor() {
    this.subComponents = {
      'image': {},
      'icon': {},
    };

  }

  ngOnInit() {
    this.openComponent = 'image';
  }

  ngOnChanges() {
    if (this.compControl) {
      this.compControl.submit = () => this.submit();
      this.compControl.reset = () => this.reset();
    }
  }

  /** Return component data */
  submit(): string {

    if (this.subComponents[this.openComponent].submit) {
      return this.subComponents[this.openComponent].submit();
    } else {
      return '';
    }

  }

  /** Reset all components */
  reset() {

    if (this.subComponents.image.reset) {
      this.subComponents.image.reset();
    }

    if (this.subComponents.icon.reset) {
      this.subComponents.icon.reset();
    }

  }

}
