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

  length: number = 0;
  zeroData: number[] = [];
  generateRandomChart() {
    const length = 20; //Math.ceil(10 + 10 * Math.random());
    const minValue = Math.floor(50 * Math.random());
    const maxValue = Math.ceil(50 + 100 * Math.random());

    for (let line of this.lines) {
      line.data = [];
    }

    this.zeroData = [];
    for (let i = 0; i < length; i++) {
      for (let line of this.lines) {
        line.data.push(minValue + Math.ceil(maxValue * Math.random()));
        this.zeroData.push(0);
      }
    }

    this.length = length;

    setTimeout( () => {
      (this._chart as any).refresh();
    })
  }

  lines = [
    {
      progress: 90,
      text: 'Mauris maximus sapien sit amet erat luctus laoreet. Sed consequat lacinia urna, vitae.',
      value: '10 000',
      data: [],
      show: true,
      label: true
    },
    {
      progress: 70,
      text: 'Mauris maximus sapien sit amet erat luctus laoreet. Sed consequat lacinia urna, vitae.',
      value: '10 000',
      data: [],
      show: false,
      label: true
    },
    {
      progress: 50,
      text: 'Mauris maximus sapien sit amet erat luctus laoreet. Sed consequat lacinia urna, vitae.',
      value: '10 000',
      data: [],
      show: true,
      label: true
    },
    {
      progress: 30,
      text: 'Mauris maximus sapien sit amet erat luctus laoreet. Sed consequat lacinia urna, vitae.',
      value: '10 000',
      data: [],
      show: false,
      label: true
    }
  ];

  get dataset() {
    const renderLines = [];

    for (let line of this.lines) {
      if (line.show) {
        renderLines.push({
          data: line.data,
          pointRadius: 0
        });
      } else {
        renderLines.push(
          {
            data: this.zeroData,
            pointRadius: 0
          }
        );
      }
    }

    return renderLines;
  }
  getGradient(v) {
    return `linear-gradient(to right, var(--active-zone) 0%, var(--active-zone) ${v}%, rgba(0,0,0,0) ${v}%, rgba(0,0,0,0) 100%)`
  }

  /*   Length must by > or = lines array length  */
  colours = [{
    backgroundColor: 'rgba(128, 159, 255, 0.11)',
    borderColor: 'rgba(128, 159, 255, 0.6)',
    borderWidth: 1
  }, {
    backgroundColor: 'rgba(128, 159, 255, 0.11)',
    borderColor: 'rgba(128, 159, 255, 0.6)',
    borderWidth: 1
  },{
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
    return Math.max.apply(
      Math,
      this.lines.map((line) => {
        return Math.max.apply(Math, line.data);
      })
    );
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


  getIndexOffset(offset, distance, {margin} = {margin: 2}) {



    return Math.round((this.length - margin * 2) * (offset / distance)) + margin;
  }
}
