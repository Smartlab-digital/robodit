import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NgChartjsDirective} from "ng-chartjs";

@Component({
  selector: 'app-service-level-card',
  templateUrl: './service-level-card.component.html',
  styleUrls: ['./service-level-card.component.scss'],
})
export class ServiceLevelCardComponent implements OnInit {
  _mainChart: any;
  @ViewChild('mainChart', { static: false })
  get mainChart() {
    return this._mainChart;
  }
  set mainChart(v: ElementRef) {
    this._mainChart = v;
    this.refresh();
  }
;

  @Input('red-fill') fill: 'border' | 'background' = null;
  mode: 'full' | 'min' = 'min';
  @Input('chart_preview') chart_preview = false;
  @ViewChild(NgChartjsDirective, { static: false }) _chart: NgChartjsDirective;

  constructor() { }

  ngOnInit() {
    this.generateRandomChart();
  }

  get chartWidth() {
    return (this.mainChart && this.mainChart.nativeElement && this.mainChart.nativeElement.clientWidth) || 200;
  }

  data: any;
  generateRandomChart() {
    const length = 26; //Math.ceil(10 + 10 * Math.random());
    const minValue = Math.floor(20 * Math.random());
    const maxValue = Math.ceil(21 + 50 * Math.random());
    this.redValueAfter =  maxValue / 1.75;

    const data = [];
    const colors = [];

    for (let i = 0; i < length; i++) {
      const v = maxValue * Math.random();
      data.push(v);

      if (v > this.redValueAfter) {
        colors.push('#E74A55');
      } else {
        colors.push('#2FA39E');
      }
    }

    this.data = data;
    this.mainColors = [{
      backgroundColor: colors,
    }];

    this.refresh();
  }
  refresh() {
    setTimeout( () => {
      if (!this._chart) return;
      (this._chart as any).refresh();
    });
  }

  get dataset() {
    return [{
      data: this.data,
      barThickness: Math.ceil(200 / this.data.length - 4),
      borderWidth: 0
    }];
  }
  get main_dataset() {
    const width = Math.ceil((this.chartWidth - 40) / this.data.length - 6) ;

    return [{
      data: this.data,
      //(this.mainChart.nativeElement.clientWidth - 50)
      barThickness: width,
      borderWidth: 0
    }];
  }

  redValueAfter: number;
  mainColors: any;

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
  };
}
