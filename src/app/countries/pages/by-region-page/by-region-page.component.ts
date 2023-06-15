import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  @Input() public countries: Country[] = []

  public regions: Region[] = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ]
  public isLoading: boolean = false
  public selectedRegion?: Region


  ngOnInit(): void {
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
    this.countries = this.countriesService.cacheStore.byRegion.countries
  }


  searchByRegion(term: Region): void {

    this.isLoading = true

    this.selectedRegion = term

    this.countriesService.byRegion(term).subscribe(
      resCountries => {
        this.isLoading = false
        this.countries = resCountries 
      }
    )
  }
}
