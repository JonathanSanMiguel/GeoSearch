import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent {

  constructor(private countriesService: CountriesService) {}

  @Input() public countries: Country[] = []


  searchByCountry(term: string): void {

    const resAndTerm: string = `name/${term}`

    this.countriesService.toDoASearch(resAndTerm).subscribe(
      resCountries => {
        this.countries = resCountries
      }
    )
  }

}
