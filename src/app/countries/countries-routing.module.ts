import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';

const routes: Routes = [
    { path: 'byCapital', component: ByCapitalPageComponent },
    { path: 'byCountry', component: ByCountryComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class CountriesRoutingModule { }
