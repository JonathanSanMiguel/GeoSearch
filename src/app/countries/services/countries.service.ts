import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';


@Injectable({
    providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'


  // Search for Capital
  searchCapital(query: string): Observable<Country[]> {

    const endPoint: string = `capital/${query}`

    return this.http.get<Country[]>(`${this.apiUrl}/${endPoint}`)
  }


}
