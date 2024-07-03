import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { Constants } from './constants';
import { Injectable } from '@angular/core';
import { User } from './../model/user';
import { WebStorageUtil } from './web-storage-util';

@Injectable()
export class AuthenticationGuard  {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    let url: string = state.url;
    let user: User = WebStorageUtil.get(Constants.USERNAME_KEY) as User;
    if (localStorage.getItem(Constants.LOGGED_IN_KEY) == 'false') {
      this.router.navigate(['']);
    }
    return true;
  }
}
