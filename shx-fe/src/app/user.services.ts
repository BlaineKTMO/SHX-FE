// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usernameSource = new BehaviorSubject<string>('');
  currentUsername = this.usernameSource.asObservable();

  constructor() {
    // Initialize from session storage
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      this.usernameSource.next(storedUsername);
    }
  }

  setUsername(username: string) {
    sessionStorage.setItem('username', username);
    this.usernameSource.next(username);
  }

  clearUsername() {
    sessionStorage.removeItem('username');
    this.usernameSource.next('');
  }

  getUsername(): string | null {
    return sessionStorage.getItem('username');
  }
}