import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent {

  constructor() {}

  @Input() public placeholder: string = ''

  @Output() public onValue = new EventEmitter<string>()

  emitirValor(value: string): void {
    this.onValue.emit(value)
  }

}
