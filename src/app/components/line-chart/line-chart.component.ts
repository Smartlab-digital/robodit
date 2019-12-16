import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgChartjsDirective} from "ng-chartjs";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('chart', null) chartEl: ElementRef;
  @ViewChild(NgChartjsDirective, null) _chart: NgChartjsDirective;

  constructor() { }

  ngOnInit() {
    this.generateRandomChart();
  }

  get chartHeight() {
    return (this.chartEl && this.chartEl.nativeElement.clientHeight) || 0;
  }

  data  = [3, 5, 2, 5, 6, 7, 9, 8, 4, 5, 3, 5, 7, 3, 2];
  data2 = [7, 3, 6, 7, 9, 7, 2, 1, 4, 5, 2, 4, 5, 8, 1];

  generateRandomChart() {
    const length = 20; //Math.ceil(10 + 10 * Math.random());
    const minValue = Math.floor(50 * Math.random());
    const maxValue = Math.ceil(50 + 100 * Math.random());

    const data1 = [];
    const data2 = [];

    for (let i = 0; i < length; i++) {
      data1.push(minValue + Math.ceil(maxValue * Math.random()));
      data2.push(minValue + Math.ceil(maxValue * Math.random()));
    }

    this.data = data1;
    this.data2 = data2;

    // for animation need update index value, not all value
    this.chartLabels[0].i = Math.floor(length * Math.random());
    this.chartLabels[1].i = Math.floor(length * Math.random());

    setTimeout( () => {
      (this._chart as any).refresh();
    })
  }

  chartLabels = [
    {
      text: '40%',
      i: 0
    },
    {
      text: '70%',
      i: 19
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

  get maxValue() {
    return Math.max(Math.max.apply(Math, this.data), Math.max.apply(Math, this.data2));
  }
  get topYLabel() {
    const variants = [10, 20, 30 , 40, 50, 60, 70, 80, 90, 100, 150];

    const maxValue = this.maxValue;
    for (let i = 1; i  < 8; i++) {
      for (let variant of variants) {
        variant = variant *  (Math.pow(10, i) / 10);
        if (variant > maxValue) {
          return variant;
        }
      }
    }

    return undefined;
  }

  get options() {
    const maxYLabel = this.topYLabel;

    return {
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
            stepSize: maxYLabel / 2,
            max: maxYLabel,
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
  };

}
