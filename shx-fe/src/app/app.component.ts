// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    ImageDisplayComponent,
  ], // Add required modules/components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private usernameSubject: BehaviorSubject<string>;
  username$: Observable<string>;

  constructor() {
    const username = sessionStorage.getItem('username') || '';
    this.usernameSubject = new BehaviorSubject<string>(username);
    this.username$ = this.usernameSubject.asObservable();
  }
}