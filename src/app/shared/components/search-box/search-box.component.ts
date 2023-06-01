import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  OnDestroy
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  constructor() { }

  private debouncer = new Subject<string>()
  private debouncerSuscription?: Subscription

  @Input() public placeholder: string = ''

  @Output() public onDebounce = new EventEmitter<string>()


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      // debounceTime(300)
    )
    .subscribe(
      value => {
        this.onDebounce.emit(value)
      }
    )
  }
  
  onKeyPress(searchWord: string): void {
    this.debouncer.next(searchWord)
  }


  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe()
  }
}
