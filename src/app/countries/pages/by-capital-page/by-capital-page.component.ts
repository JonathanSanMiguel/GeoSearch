import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = []


  searchByCapital(term: string): void {
    this.countriesService.searchCapital(term).subscribe(
      resCountries => {
        this.countries = resCountries
      }
    )
  }

}
