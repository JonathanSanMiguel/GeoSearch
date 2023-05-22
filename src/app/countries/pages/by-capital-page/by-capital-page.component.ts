import { Component } from '@angular/core';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  constructor() {}

  searchByCapital(term: string): void {
    console.log("From By Capital Page")
    console.log({ term })
  }

}
