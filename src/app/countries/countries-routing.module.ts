import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


const routes: Routes = [
    { path: 'byCapital', component: ByCapitalPageComponent },
    { path: 'byCountry', component: ByCountryPageComponent },
    { path: 'byRegion', component: ByRegionPageComponent },
    { path: 'Country', component: CountryPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class CountriesRoutingModule { }
