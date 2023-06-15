import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: []
})
export class ByCountryPageComponent implements OnInit{

  constructor(private countriesService: CountriesService) {}

  @Input() public countries: Country[] = []

  public valueInitial: string = ''
  public isLoading: boolean = false


  ngOnInit(): void {
    this.valueInitial = this.countriesService.cacheStore.byCountry.term
    this.countries = this.countriesService.cacheStore.byCountry.countries
  }


  searchByCountry(term: string): void {

    this.isLoading = true

    this.countriesService.byCountry(term).subscribe(
      resCountries => {
        this.isLoading = false
        this.countries = resCountries
      }
    )
  }

}
