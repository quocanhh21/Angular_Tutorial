import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  questions = [
    { text: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correct: 'Paris', selectedAnswer: '' },
    { text: '2 + 2 = ?', options: ['3', '4', '5'], correct: '4', selectedAnswer: '' },
    { text: 'Which language is used for Angular?', options: ['Java', 'TypeScript', 'Python'], correct: 'TypeScript', selectedAnswer: '' },
  ];

  points = 0;
  submitted = false;

  submitTest() {
    this.points = 0; // Reset score
    this.questions.forEach(q => {
      if (q.selectedAnswer === q.correct) {
        this.points += 10; // 10 points per correct answer
      }
    });

    this.submitted = true;
  }
}
