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

  public regions: Region[] = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ]
  public isLoading: boolean = false
  public selectedRegion?: Region


  searchByRegion(term: Region): void {

    this.isLoading = true

    const resAndTerm: string = `region/${term}`

    this.selectedRegion = term

    this.countriesService.toDoASearch(resAndTerm).subscribe(
      resCountries => {
        this.isLoading = false
        this.countries = resCountries 
      }
    )
  }
}

type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania' 
