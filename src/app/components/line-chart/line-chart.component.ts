import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart', null) chartEl: ElementRef;

  constructor() { }

  ngOnInit() {}

  get chartHeight() {
    return (this.chartEl && this.chartEl.nativeElement.clientHeight) || 0;
  }

  data  = [3, 5, 2, 5, 6, 7, 9, 8, 4, 5, 3, 5, 7, 3, 2];
  data2 = [7, 3, 6, 7, 9, 7, 2, 3, 4, 5, 2, 4, 5, 8, 1];


  chartLabels = [
    {
      text: '40%',
      x: 0.38,
      y: 0.65
    },
    {
      text: '70%',
      x: 0.7,
      y: 0.5
    }
  ];

  get dataset() {
    return [{
      data: this.data,
      fill: true,
      pointRadius: 0
    }, {
      data: this.data2,
      fill: true,
      pointRadius: 0
    }];
  }

  colours = [{
    backgroundColor: 'rgba(128, 159, 255, 0.11)',
    borderColor: 'rgba(128, 159, 255, 0.6)',
    borderWidth: 1
  }, {
    backgroundColor: 'rgba(128, 159, 255, 0.11)',
    borderColor: 'rgba(128, 159, 255, 0.6)',
    borderWidth: 1
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
