import { Routes } from '@angular/router';
import { HomeComponent } from './features/user/home/home.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout/user-layout.component';
import { DashboardComponent } from './features/user/dashboard/dashboard.component';
import { ProfileComponent } from './features/user/profile/profile.component';
import { EditProfileComponent } from './features/user/profile/edit-profile/edit-profile.component';
import { TestComponent } from './features/user/test/test.component';
import { LearningComponent } from './features/user/learning/learning.component';

export const routes: Routes =[
    {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'dashboard', component: DashboardComponent },        
          { path: 'tests', component: TestComponent },
          { path: 'learning', component: LearningComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'profile/edit', component: EditProfileComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
  ];
