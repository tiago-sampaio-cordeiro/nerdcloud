import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-couchplay',
  standalone: true,
  imports: [],
  templateUrl: './card-couchplay.component.html',
  styleUrl: './card-couchplay.component.css'
})
export class CardCouchplayComponent {
  @Input() game: any;

}
