import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {
  _show: boolean = false;
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

  ngOnInit() {}

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
