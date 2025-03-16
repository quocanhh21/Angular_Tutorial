import { Component } from '@angular/core';
import { UserHeaderComponent } from "../user-header/user-header.component";
import { UserFooterComponent } from "../user-footer/user-footer.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,UserHeaderComponent, UserFooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
