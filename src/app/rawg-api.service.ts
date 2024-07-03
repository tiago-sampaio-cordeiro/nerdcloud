import { Injectable } from '@angular/core';
import axios from 'axios'; 

@Injectable({
  providedIn: 'root'
})
export class RawgApiService {
  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = '7e194667b0a6447480287f330f21bbb9  ';
  constructor() { }

  getGames() {
    return axios.get(`${this.apiUrl}/games?key=${this.apiKey}`)
  }
}
