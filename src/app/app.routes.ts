import { Routes } from '@angular/router';
import { HomeComponent } from './features/user/home/home.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout/user-layout.component';

export const routes: Routes =[
    {
        path: '',
        component: UserLayoutComponent,
        children: [
          { path: '', component: HomeComponent }
        ]
    },
    // {
    //   path: 'admin',
    //   loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
    // },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Handle unknown routes
  ];
