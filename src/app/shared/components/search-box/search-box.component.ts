import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent {

  constructor() {}

  @Input() public placeholder: string = ''

  @ViewChild('txtSearchInput') searchInput!: string

  

}
