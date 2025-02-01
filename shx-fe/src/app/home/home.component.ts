import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MenuBarComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
