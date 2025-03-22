import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.scss'
})
export class LearningComponent {
  lessons = [
    { title: 'Introduction to AI', description: 'Learn the basics of AI and machine learning.', completed: false },
    { title: 'Understanding Angular', description: 'Deep dive into Angular fundamentals.', completed: false },
    { title: 'Mastering .NET Core', description: 'Explore advanced .NET Core concepts.', completed: false }
  ];

  get completedLessons(): number {
    return this.lessons.filter(lesson => lesson.completed).length;
  }

  get progressPercentage(): number {
    return (this.completedLessons / this.lessons.length) * 100;
  }

  completeLesson(lesson: any) {
    lesson.completed = true;
  }
}
