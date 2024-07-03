import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Game } from '../../app/model/game';
import { WebStorageUtil } from '../../app/util/web-storage-util';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() game: any;

  db = WebStorageUtil;

  aoClicar(game: Game){
    let gamesFree: any[] = this.db.getArray('freeForRent');
    let rent: any[] = this.db.getArray('rented');  
    let nome = game.name;
    let index: number = rent.indexOf(nome);
    let aux = rent.filter(rented => rented == nome)
    gamesFree.push(aux[0]);
    rent.splice(index,1); 
    this.db.setArray('rented', rent);
    this.db.setArray('freeForRent', gamesFree);
  }


}
