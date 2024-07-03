import { Component } from '@angular/core';
import { CardsComponent } from "../cards_list/cards.component";
import { CommonModule } from '@angular/common';
import { RawgApiService } from '../../app/rawg-api.service';
import { CardsToRentComponent } from "../cards-to-rent/cards-to-rent.component";
import { FilterComponent } from "../filter/filter.component";
import { GameComponent } from '../game/game.component';
import { Game } from '../../app/model/game';
import { WebStorageUtil } from '../../app/util/web-storage-util';



@Component({
    selector: 'app-browse-screen',
    standalone: true,
    templateUrl: './browse-screen.component.html',
    styleUrl: './browse-screen.component.css',
    imports: [CommonModule, CardsToRentComponent, FilterComponent]
})
export class BrowseScreenComponent {
  games: any[] = [];
  db = WebStorageUtil;
  constructor(private rawgService: RawgApiService) {}

  ngOnInit(): void {
    this.games = GameComponent.getGames();

    /* this.rawgService.getGames().then((response: { data: { results: any[]; }; }) => {
      this.games = response.data.results;
      console.log(this.games)
    }).catch((error: any) => {
      console.error('Failed to fetch games', error);
    });*/
  }

  ifFree(game: Game){
    let list: any[] = this.db.getArray('freeForRent'); 
    let nome = game.name;
    if(list.length > 0){
          for(let i = 0; i < list.length; i++){
            if(list[i] == nome){
              
              return true;
            }
          } 
    
      }
      
    return false;  
    }
  }




