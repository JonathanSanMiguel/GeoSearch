import { Component, Input } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent {

  constructor(private countriesService: CountriesService) {}

  @Input() public countries: Country[] = []


  searchByRegion(term: string): void {

    const resAndTerm: string = `region/${term}`

    this.countriesService.toDoASearch(resAndTerm).subscribe(
      resCountries => {
        this.countries = resCountries 
      }
    )
  }

}
