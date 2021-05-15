import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes : string [] = ['Spiderman','Black widow','Thor'];
  heroesBorrado : string [] =[];


  borrarHeroe(posicion : number) :void {

 
    this.heroesBorrado.push(this.heroes.splice(posicion, 1)[0])
 
  }
}
