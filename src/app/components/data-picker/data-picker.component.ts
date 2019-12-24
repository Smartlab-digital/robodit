import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {
  _show: boolean = true;
  @ViewChild('dateInput', null) date: any;
  @ViewChild('timeInput', null) time: any;

  _todayDate = new Date(  Date.now() - (Date.now() % (1000 * 60 * 60 * 24)) ).toISOString();
  get todayDate() {
    return this._todayDate;
  }
  set todayDate(v) {
    console.warn(v);
    this._todayDate = v;
  }

  constructor() { }

  ngOnInit() {
    this.generateCalendar();
  }


  rows: any = [[]];

  generateCalendar() {
    let startDate = new Date(this.todayDate);
    startDate.setMonth(11);
    startDate.setDate(1);

    let preMonth = new Date(startDate);
    preMonth.setDate(0);

    const rows = [[]];

    for (let i = this.getDay(startDate); i > 0; i--) {
      let date = new Date(preMonth);
      date.setDate(date.getDate() - i + 1);
      rows[0].push({
        value: date,
        date:  date.getDate(),
        month: date.getMonth()
      });
    }

    let row = 0;
    let date =  new Date(startDate);
    for (let i = 1; (startDate.getMonth() == date.getMonth() || date.getDay() != 0); i++) {
      date = new Date(startDate);
      date.setDate(1);
      date.setDate(i);

      rows[row].push({
        value: date,
        date:  date.getDate(),
        month: date.getMonth()
      });

      if (date.getDay() == 0) {
        rows.push([]);
        row++;
      }
    }

    this.rows = rows;
  }
  getDay(date) {
    return {
      0:6,
      1:0,
      2:1,
      3:2,
      4:3,
      5:4,
      6:5
    }[date.getDay()];
  }


    show() {
    this._show = true;
    console.log(this.todayDate);
  }
  hide() {
    this._show = false;
  }

  inputDate() {
    this.date.el.click();
  }
  inputTime() {
    this.time.value = this.date.value;
    this.time.el.click();
  }
  selectedDate() {
    console.log(this.time.value);
  }

  selected: {
    from: Date | string;
    to?: Date | string;
  };
  select(date) {
    if (!this.selected || this.selected.to ) {
      this.selected = {
        from:  date.value
      }
    } else {
      this.selected.to = date.value;
    }
  }
  isActive(date) {
    if (this.selected && this.selected.to) {
      return +(new Date(this.selected.to)) >= +(new Date(date.value))
        &&
        +(new Date(this.selected.from)) <= +(new Date(date.value));
    } else {
      return false;
    }
  }


  pickerOptions = {
    cssClass: 'data-picker',
    mode: 'ios'
  };
  get datePickerOptions() {
    return {
      ...this.pickerOptions,
      buttons: [
        {},
        {
          text: 'Done',
          handler: this.inputTime.bind(this)
        }
      ]
    }
  }
}
