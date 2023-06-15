import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/chache-store.interface';
import { Region } from '../interfaces/region.type';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
    this.loadFromTheStorage()
  }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountry: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  private saveToLocalStorage() {
    localStorage.setItem(
      'cacheLocalStorage', JSON.stringify(this.cacheStore)
    )
  }

  private loadFromTheStorage() {
    if (!localStorage.getItem('cacheLocalStorage')) return
    this.cacheStore = JSON.parse(localStorage.getItem('cacheLocalStorage')!)
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
      tap(
        () => this.saveToLocalStorage()
      ),
      catchError(
        error => of([])
      )
    )
  }


  byCountry(query: string): Observable<Country[]> {

    const endPoint: string = `name/${query}`

    return this.http.get<Country[]>(`${this.apiUrl}/${endPoint}`).pipe(
      tap(
        resCountries => this.cacheStore.byCountry = {
          term: query,
          countries: resCountries  
        }
      ),
      tap(
        () => this.saveToLocalStorage()
      ),
      catchError(
        error => of([])
      )
    )
  }


  byRegion(query: Region): Observable<Country[]> {

    const endPoint: string = `region/${query}`

    return this.http.get<Country[]>(`${this.apiUrl}/${endPoint}`).pipe(
      tap(
        resCountries => this.cacheStore.byRegion = {
            region: query,
            countries: resCountries
        }
      ),
      tap(
        () => this.saveToLocalStorage()
      ),
      catchError(
        error => of([])
      )
    )
  }


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
