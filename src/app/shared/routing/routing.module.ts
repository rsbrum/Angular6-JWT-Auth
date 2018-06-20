import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { LandingPageComponent } from '../../components/landing-page/landing-page.component';
import { HomeComponent } from '../../components/home/home.component';
import { AuthGuardService } from '../auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/welcome/(auth:signin)', pathMatch: 'full'},
  { path: 'welcome', component: LandingPageComponent, children: [
    { path: 'signin', component: SignInComponent, outlet: 'auth'},
    { path: 'signup', component: SignUpComponent, outlet: 'auth'}
  ]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},

 ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
