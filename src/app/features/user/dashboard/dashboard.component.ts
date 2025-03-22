import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  userName: string = 'John Doe'; // Fetch from API later
  aiTips: string[] = [
    "Practice speaking with native speakers.",
    "Listen to English podcasts daily.",
    "Write a short journal entry every day."
  ];

  ngAfterViewInit() {
    this.renderChart();
  }

  renderChart() {
    new Chart('progressChart', {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Proficiency Score',
          data: [60, 70, 75, 85],
          borderColor: '#3b82f6',
          fill: false
        }]
      }
    });
  }

  startTest() {
    console.log("Navigating to test...");
  }

  viewRoadmap() {
    console.log("Navigating to roadmap...");
  }

  continueLearning() {
    console.log("Navigating to learning module...");
  }
}