import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CardCouchplayComponent } from "../card-couchplay/card-couchplay.component";
import { RawgApiService } from '../../app/rawg-api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-couchplay-screen',
    standalone: true,
    templateUrl: './couchplay-screen.component.html',
    styleUrl: './couchplay-screen.component.css',
    imports: [CommonModule, FooterComponent, CardCouchplayComponent]
})
export class CouchplayScreenComponent {
    games: any[] = [];

    constructor(private rawgService: RawgApiService) {}
  
    ngOnInit(): void {
      this.rawgService.getGames().then(response => {
        this.games = response.data.results;
        console.log(this.games)
      }).catch(error => {
        console.error('Failed to fetch games', error);
      });
    }
}
