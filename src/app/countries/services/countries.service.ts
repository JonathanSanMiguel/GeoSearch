import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({
    providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'


  // Search for Country, Capital o Region
  toDoASearch(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${query}`).pipe(
      catchError(
        error => of([])
      )
    )
  }


  // Search for Alpha Code
  searchCountryByAlphaCode(code: string): Observable<Country | null> {

    const endPoint: string = `alpha/${code}`

    return this.http.get<Country[]>(`${this.apiUrl}/${endPoint}`).pipe(
      map(
        countries => countries.length > 0 ? countries[0] : null
      ), 
      catchError(
        error => of(null)
      )
    )
  }

}
