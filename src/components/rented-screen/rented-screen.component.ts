import { Component } from '@angular/core';
import { CardsComponent } from "../cards_list/cards.component";
import { CommonModule } from '@angular/common';
import { RawgApiService } from '../../app/rawg-api.service';

import { FilterComponent } from "../filter/filter.component";

import { GameComponent } from '../game/game.component';
import { WebStorageUtil } from '../../app/util/web-storage-util';
import { Game } from '../../app/model/game';


@Component({
    selector: 'app-rented-screen',
    standalone: true,
    templateUrl: './rented-screen.component.html',
    styleUrl: './rented-screen.component.css',
    imports: [CardsComponent, CommonModule, FilterComponent]
})
export class RentedScreenComponent {
  games: any[] = [];
  db = WebStorageUtil;
  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.games = GameComponent.getGames();
    
    /*this.rawgService.getGames().then((response: { data: { results: any[]; }; }) => {
      this.games = response.data.results;
      console.log(this.games)
    }).catch((error: any) => {
      console.error('Failed to fetch games', error);
    });*/
  }

  isRented(game: Game){
    let list: any[] = this.db.getArray('rented'); 
    let nome = game.name;
    console.log(nome)
    console.log(list.length)
    if(list.length > 0){
          for(let i = 0; i < list.length; i++){
            if(list[i] == nome){
              console.log(list[i] +' '+ nome);
              return true;
            }
          }      
      }
      
    return false;  
    }
} 