// signin.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../model/User';
import { UserService } from '../user.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ], // Required imports
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  user: User = {} as User;

  constructor(
    private router: Router,
    private api: ApiService,
    private userService: UserService
  )
  {}

  // Example form model
  credentials = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Sign-in attempt:', this.credentials);
    // Add authentication logic here


    // Example API call

    this.api.post<User>('api/users/search', this.credentials).subscribe((response) => {
      console.log('Response:', response);
      
      // Store user in session
      this.user.username = response.username;
      console.log('User:', this.user);
      
      // Store the user in session
      sessionStorage.setItem('user', JSON.stringify(this.user.username));
      this.userService.setUsername(this.user.username);

      // Redirect to home
      this.router.navigate(['/home']);
    },
      (error) => {
        console.error('API error:', error);
      }
    )

  }
}