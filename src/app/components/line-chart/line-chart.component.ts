import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  data = [3, 5, 2, 5,6, 7, 9, 8, 4, 5, 3, 5, 7, 3,  6, 7, 9, 8, 4, 5, 3, 5, 2, 4, 5, 2];

  get dataset() {
    return [{
      data: this.data,
      barThickness: Math.ceil(200 / this.data.length - 4),
      borderWidth: 0
    }];
  }
  get main_dataset() {
    return [{
      data: this.data,
      //(this.mainChart.nativeElement.clientWidth - 50)
      barThickness: Math.ceil(200 / this.data.length - 4),
      borderWidth: 0
    }];
  }

  redValueAfter: number = 5;
  get mainColors() {
    const colors = [];
    for (let v of this.data) {
      if (v > this.redValueAfter) {
        colors.push('#E74A55');
      } else {
        colors.push('#2FA39E');
      }
    }

    return[{
      backgroundColor: colors,
    }];
  }

  colours = [{
    fillColor: 'rgba(255, 255, 255, 0.8)',
    strokeColor: 'rgba(255, 255, 255, 0.8)',
    highlightFill: 'rgba(255, 255, 255, 0.8)',
    highlightStroke: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: '#d5d4d6'
  }];

  labels = ['00', '06', '12', '16', '24'];

  fullChartOptions = {
    legend: { display: false },
    title: {
      display: false,
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0

      }
    },


    scales: {
      xAxes: [{
        gridLines:{
          drawBorder: true,
          zeroLineColor: 'rgba(255, 255, 255, 0.05)',
          lineWidth: 0,
          zeroLineWidth: 2
        },
        ticks: {
          display: true,
        },
      }],
      yAxes: [{
        gridLines: false,
        ticks: {
          display: true,
          maxTicksLimit: 3,
          beginAtZero: true,
          fontFamily: 'Montserrat',
          fontSize: 10,
          fontColor: '#BDBDBD',
          padding: 0,
          textAlign: 'left',

          callback: function(value, index, values) {
            value = value.toString();

            let maxLength = 4;
            for (let v of values) {
              maxLength = Math.max(maxLength, v.toString().length);
            }

            return value + ' '.repeat(maxLength - value.length + 2);
          }
        }

      }]
    },
  };

}
