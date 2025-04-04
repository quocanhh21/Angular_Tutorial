import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = inject(ApiService);
  private baseUrl = 'auth';

  async login(email: string, password: string): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await this.api.post<{ token: string }>(`${this.baseUrl}/login`, {
        email,
        password
      }).toPromise();

      if (response?.token) {
        localStorage.setItem('access_token', response.token);
        return { success: true };
      }

      return { success: false, message: 'Invalid credentials' };
    } catch (err: any) {
      return {
        success: false,
        message: err?.error?.message || 'Login failed'
      };
    }
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
}