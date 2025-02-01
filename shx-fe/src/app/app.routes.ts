// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './signin/signin.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
  { path: 'services', component: ServicesComponent }
];