import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-service-level-card',
  templateUrl: './service-level-card.component.html',
  styleUrls: ['./service-level-card.component.scss'],
})
export class ServiceLevelCardComponent implements OnInit {
  @ViewChild('mainChart', { static: false }) mainChart: ElementRef;
  @Input('red-fill') fill: 'border' | 'background' = null;
  mode: 'full' | 'min' = 'min';
  @Input('chart_preview') chart_preview = false;

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

    const data = [];

    for (let i = 0; i < length; i++) {
      data.push(minValue + Math.ceil(maxValue * Math.random()));
    }

    this.data = data;
    this.redValueAfter =  maxValue / 1.75;
  }

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
      barThickness: Math.ceil(this.chartWidth / this.data.length - 2),
      borderWidth: 0
    }];
  }

  redValueAfter: number;
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
