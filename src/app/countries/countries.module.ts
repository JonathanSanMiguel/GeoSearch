import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountriesModule { }
