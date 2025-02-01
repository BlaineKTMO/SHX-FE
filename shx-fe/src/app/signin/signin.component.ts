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

  constructor(
    private router: Router,
    private api: ApiService,
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

    this.api.post('api/signin', this.credentials).subscribe((response) => {
      console.log('Response:', response);
      // Redirect to home
      this.router.navigate(['/home']);
    })
  }
}