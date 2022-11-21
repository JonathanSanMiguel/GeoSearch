import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Pais } from '../interfaces/pais.interface'

@Injectable({
  providedIn: 'root'
})//Injectable

export class PaisService {
  //EndPoint del Api que consumiremos.
  private API_URL: string = 'https://restcountries.com/v2'
  //Inyeccion del servicio http.
  constructor( private http: HttpClient ) { }
  //Metodo para buscar el pais solicitado por el parametro "termino".
  //El cual es un observable de tipo Pais.
  buscarPais( termino: string ): Observable<Pais[]>{
    //Guarda en una varibale el url base mas la ruta del endpoint y el termino de busqueda.
    const Url: string = `${this.API_URL}/name/${termino}`
    //Manda el url base mas la direccion y el valor del termino.
    return this.http.get<Pais[]>(Url)
  }//buscarPais
}//PaisService