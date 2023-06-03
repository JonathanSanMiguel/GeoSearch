import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.valueForInitial = this.countriesService.cacheStore.byCapital.term
  }

  public countries: Country[] = []
  public isLoading: boolean = false
  public valueForInitial: string = ''


  searchByCapital(term: string): void {

    this.isLoading = true

    this.countriesService.byCapital(term).subscribe(
      resCountries => {
        this.isLoading = false
        this.countries = resCountries
      }
    )
  }

}
