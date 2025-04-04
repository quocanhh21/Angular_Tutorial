import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../core/services/api.service';
import { map, Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'] 
})
export class ProfileComponent {
  user$!: Observable<User>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.user$ = this.api.get<any>('Sample/user').pipe(
      map(res => {
        console.log('[ProfileComponent] API response:', res);
        return this.transformToUser(res);
      })
    );
  }

  private transformToUser(res: any): User {
    return {
      id: res.id,
      name: res.data.userName,
      email: res.data.email,
      role: res.role || 'user',
      createdAt: new Date(res.created_at).toString(),
      // safely handle optional fields
    };
  }
}
