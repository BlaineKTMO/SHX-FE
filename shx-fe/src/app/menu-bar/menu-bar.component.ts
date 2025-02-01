// menu-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.services';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    RouterModule,
    MatToolbar,
    NgIf,
    CommonModule,
  ],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  username$: Observable<string>;

  constructor(private userService: UserService) {
    this.username$ = this.userService.currentUsername;
  }

  ngOnInit() {}

  logout() {
    this.userService.clearUsername();
    // Add any additional logout logic here
  }
}