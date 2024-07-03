import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../app/model/user';
import { Constants } from '../../app/util/constants';
import { WebStorageUtil } from '../../app/util/web-storage-util';
import { FormsModule } from '@angular/forms';
import { Shared } from '../../app/util/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  imports: [FormsModule],
  standalone: true
})
export class LoginScreenComponent implements OnInit {
  user!: User;
  loginUser!: User;
  constructor(private router: Router) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.loginUser = new User('', '');
    this.user = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  onLogin() {
    console.log(this.loginUser.password);
    if (
      this.loginUser.username === this.user.username &&
      this.loginUser.password === this.user.password
    ) {
      WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
      this.router.navigate(['start-screen']);
    } else {
      alert(
        'Usuário ou senha incorreto'
      );
      
    }
  }
}
