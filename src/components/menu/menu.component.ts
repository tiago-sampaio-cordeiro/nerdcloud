import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedMenu: string = 'home';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateSelectedMenu(event.urlAfterRedirects);
    });

    this.updateSelectedMenu(this.router.url);
  }

  updateSelectedMenu(url: string): void {
    switch (url) {
      case '/start-screen':
        this.selectedMenu = 'home';
        break;
      case '/rented-screen':
        this.selectedMenu = 'rented';
        break;
      case '/browse-screen':
        this.selectedMenu = 'browse';
        break;
      case '/couchplay-screen':
        this.selectedMenu = 'couchplay';
        break;
      case '/account-screen':
        this.selectedMenu = 'account';
        break;
      default:
        this.selectedMenu = 'home';
        break;
    }
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
  }
}
