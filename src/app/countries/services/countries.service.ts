import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/chache-store.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'


  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }


  byCapital(query: string): Observable<Country[]> {

    const endPoint: string = `capital/${query}`

    return this.http.get<Country[]>(`${this.apiUrl}/${endPoint}`).pipe(
      tap(
        resCountries => this.cacheStore.byCapital = {
          term: query,
          countries: resCountries
        }
      ), 
      catchError(
        error => of([])
      )
    )
  }


  byCountry(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${query}`).pipe(
      catchError(
        error => of([])
      )
    )
  }


  byRegion(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/${query}`).pipe(
      catchError(
        error => of([])
      )
    )
  }


  // Search for Country, Capital o Region
  // 5toDoASearch(query: string): Observable<Country[]> {
  //   return this.http.get<Country[]>(`${this.apiUrl}/${query}`).pipe(
  //     catchError(
  //       error => of([])
  //     )
  //   )
  // }

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
