import { Component } from '@angular/core';
import { Game } from '../../app/model/game';
import { WebStorageUtil } from '../../app/util/web-storage-util';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  static insertGame(games: any[]){
    //console.log(games[0]);
    if(localStorage.length < 10){
    games.forEach((el, index) => {
      var game = {
        'id': el.id,
        'name': el.name,
        'slug': el.slug,
        'background_image': el.background_image,
        'released': el.released,
        'status': el.slug
      };
      console.log(game); 
         localStorage.setItem(`game${index}`, JSON.stringify(game));
    })
  }

}

  static getGames(): any[]{
    const games: any[] = []; 
    for(let i = 0; i < localStorage.length; i++) {
      games.push(JSON.parse(localStorage.getItem(`game${i}`)!))
    }
    return games; 
}
}
