import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user = { name: 'John Doe', email: 'john.doe@example.com' };

  saveChanges() {
    console.log('Updated Profile:', this.user);
    window.location.href = '/edit-profile';
  }

  cancelEdit() {
    window.location.href = '/edit-profile';
  }
}
