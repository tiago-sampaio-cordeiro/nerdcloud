import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Game } from '../../app/model/game';
import { WebStorageUtil } from '../../app/util/web-storage-util';
@Component({
  selector: 'app-cards-to-rent',
  standalone: true,
  imports: [],
  templateUrl: './cards-to-rent.component.html',
  styleUrl: './cards-to-rent.component.css'
})
export class CardsToRentComponent {
  @Input() game: any;
  db = WebStorageUtil;
  
  aoClicar(game: Game){
    let gamesFree: any[] = this.db.getArray('freeForRent');
    let rent: any[] = this.db.getArray('rented');  
    let nome = game.name;
    let index: number = gamesFree.indexOf(nome);
    let aux = gamesFree.filter(free => free == nome);
    rent.push(aux[0])
    gamesFree.splice(index,1); 
    this.db.setArray('rented', rent);
    this.db.setArray('freeForRent', gamesFree);
  }
}
