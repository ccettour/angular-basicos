import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Deadpool', 'Wolverine'];
  heroeBorrado: string =  ''

  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || ''
  }
}
