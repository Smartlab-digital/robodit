import {Component, Input, OnInit} from '@angular/core';
import {getRandomColor, rgba} from "ng-chartjs";

@Component({
  selector: 'app-service-level-card',
  templateUrl: './service-level-card.component.html',
  styleUrls: ['./service-level-card.component.scss'],
})
export class ServiceLevelCardComponent implements OnInit {
  @Input('mode') mode: 'border' | 'background' = null;

  constructor() { }

  ngOnInit() {}

  data = [3, 5, 2, 5,6, 7, 9, 8, 4, 5, 3, 5, 7, 3,  6, 7, 9, 8, 4, 5, 3, 5, 7, 3, 2, 4, 5, 2];

  get dataset() {
    return [{
      data: this.data,
      barThickness: Math.ceil(200 / this.data.length - 4),
    }];
  }

  "colours" = [{
    fillColor: 'rgba(255, 255, 255, 0.8)',
    strokeColor: 'rgba(255, 255, 255, 0.8)',
    highlightFill: 'rgba(255, 255, 255, 0.8)',
    highlightStroke: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: '#d5d4d6'
  }];

  options = {
    //responsive: true,
    //maintainAspectRatio: false,


    legend: { display: false },
    title: {
      display: false,
    },

    scales: {
      xAxes: [{
        gridLines: false,
        ticks: {
          display: false,
          beginAtZero: true,
        }
      }],
      yAxes: [{
        gridLines: false,
        ticks: {
          display: false,
          beginAtZero: true
        }
      }]
    },
  }
}
