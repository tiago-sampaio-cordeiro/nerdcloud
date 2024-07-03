import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-account-screen',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './account-screen.component.html',
  styleUrls: ['./account-screen.component.css']
})
export class AccountScreenComponent {
  accountName = "accountName";
  birthday: string = "";
  birthdayInputValue: any;

  constructor(private router: Router) {}

  logOut() {
    localStorage.setItem('LOGGED_IN_KEY', String(false));
    this.router.navigate(['']);
  }

  updateBirthday() {
      console.log('Account updated:', this.birthday);
  }

  updateAccountName() {
    console.log('Account updated:', this.accountName);
  }
}
