import { RouterModule, Routes } from '@angular/router';
import { StartScreenComponent } from '../components/start-screen/start-screen.component';
import { BrowseScreenComponent } from '../components/browse-screen/browse-screen.component';
import { AccountScreenComponent } from '../components/account-screen/account-screen.component';
import { CouchplayScreenComponent } from '../components/couchplay-screen/couchplay-screen.component';
import { RentedScreenComponent } from '../components/rented-screen/rented-screen.component';
import { SignInScreenComponent } from '../components/sign-in-screen/sign-in-screen.component';
import { LanguageSelectionComponent } from '../components/language-selection/language-selection.component';
import { ForgotPasswordScreenComponent } from '../components/forgot-password-screen/forgot-password-screen.component';
import { LoginScreenComponent } from '../components/login-screen/login-screen.component';
import { AuthenticationGuard } from './util/authentication.guard'
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path: '', component: LoginScreenComponent},
    {path: 'forgot-password-screen', component: ForgotPasswordScreenComponent},
    {path: 'sign-in-screen', component: SignInScreenComponent},
    {path: 'start-screen', component: StartScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'browse-screen', component: BrowseScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'account-screen', component: AccountScreenComponent, canActivate: [AuthenticationGuard], children: [
      {path: 'language-selection', component: LanguageSelectionComponent}
    ]},
    {path: 'couchplay-screen', component: CouchplayScreenComponent, canActivate: [AuthenticationGuard]},
    {path: 'rented-screen', component: RentedScreenComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    //imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule],
    providers: [AuthenticationGuard],
  })

  export class AppRoutingModule {}
