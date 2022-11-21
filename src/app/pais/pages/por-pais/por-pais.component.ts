import { Component } from '@angular/core'
import { Pais } from '../../interfaces/pais.interface'
import { PaisService } from '../../services/pais.service'

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  termino: string = ''
  hayError: boolean = false
  paises: Pais[] = []

  //Injeccion del servicio.
  constructor( private paisService: PaisService ) { }
  //Metodo para buscar un pais por el termino solicitado
  buscar(){
    this.hayError = false
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => { this.paises = resp },
      (err) => { this.hayError = true, this.paises = [] }
    )//subscribe
  }//buscar
}//PorPaisComponent