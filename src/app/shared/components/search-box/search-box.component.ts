import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  private debouncer = new Subject<string>()

  @Input() public placeholder: string = ''

  @Output() public onValue = new EventEmitter<string>()

  @Output() public onDebounce = new EventEmitter<string>()

  ngOnInit(): void {
    this.debouncer.subscribe(
      value => {
        this.onDebounce.emit(value)
      }
    )
  }

  emitirValor(value: string): void {
    this.onValue.emit(value)
  }

  onKeyPress(searchWord: string): void {
    this.debouncer.next(searchWord)
  }

}
