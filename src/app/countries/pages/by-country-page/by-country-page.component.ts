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

  public isLoading: boolean = false


  searchByCountry(term: string): void {

    this.isLoading = true

    const resAndTerm: string = `name/${term}`

    this.countriesService.toDoASearch(resAndTerm).subscribe(
      resCountries => {
        this.isLoading = false
        this.countries = resCountries
      }
    )
  }

}
