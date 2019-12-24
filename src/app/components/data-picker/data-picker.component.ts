import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {
  @ViewChild('dateInput', null) date: any;
  @ViewChild('timeInput', null) time: any;

  constructor() { }

  ngOnInit() {
    this.generateCalendar();
  }


  /* ----------------------------- Render calendar ------------------------------ */
  month = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь'
  ];

  _todayDate: Date = new Date(Date.now() - (Date.now() % (1000 * 60 * 60 * 24)));
  todayDate = new Date(Date.now() - (Date.now() % (1000 * 60 * 60 * 24))).toISOString();

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



  /* ------------------------------- Picker logic ------------------------------- */
  target: 'from' | 'to' = null;
  inputDate(target: 'from' | 'to', value: Date) {
    if (!value) {
      return;
    }

    this.target = target;
    this.date.value = value.toISOString();
    this.date.el.value = value.toISOString();
    this.date.el.click();
  }
  inputTime(target: 'from' | 'to', value: Date) {
    if (!value) {
      return;
    }
    value = new Date(value);

    this.target = target;
    this.time.value = value.toISOString();
    this.time.el.value = value.toISOString();
    this.time.el.click();
  }
  selectedDate(v, toRememberOffset:boolean = false) {
    if (!v || !this.target) return;

    if (toRememberOffset) {
      this.addsValues[this.target] = +(new Date(v)) - +this.toDateSeconds(new Date(v));
      console.log(this.addsValues);
    }

    this.selected[this.target] = new Date(v);
    this.validateInterval();
  }

  pickerOptions = {
    cssClass: 'data-picker',
    mode: 'ios'
  };

  validateInterval() {
    if (!this.selected || !this.selected.to) {
      return;
    }

    if (+(new Date(this.selected.from)) > +(new Date(this.selected.to))) {
      this.selected = {
        from: this.selected.to,
        to: this.selected.from
      };
    }
  }

  /* -------------------------------- Show logic ------------------------------- */
  _show: boolean = true;
  show() {
    this._show = true;
    console.log(this.todayDate);
  }
  hide() {
    this._show = false;
  }

  /* ----------------------------- Select interval  ---------------------------- */
  addsValues = {
    from: 0,
    to: 0
  };
  selected: {
    from: Date | string;
    to?: Date | string;
  };
  select(date) {
    const v = date.value;
    if (
      !this.selected
      ||
      (this.selected.to &&  +this.toDateSeconds(v) < +this.toDateSeconds(this.selected.to))
      ||
      +this.toDateSeconds(v) < +this.toDateSeconds(this.selected.from)
    ) {
      this.selected = {
        from:  new Date(+date.value + this.addsValues.from)
      }
    } else {
      if (+this.toDateSeconds(v) > +this.toDateSeconds(this.selected.from)) {
        this.selected.to = new Date(+date.value + this.addsValues.to);
      } else {
        this.selected = {
          from:  new Date(+date.value + this.addsValues.from),
          to: new Date(+this.toDateSeconds(this.selected.from) + this.addsValues.to)
        }
      }
    }
  }
  isActive(date) {
    if (this.selected && this.selected.to) {
      return +(new Date(this.selected.to)) >= +(new Date(date.value))
        &&
        +(this.toDateSeconds(this.selected.from)) <= +(new Date(date.value));
    } else {
      return false;
    }
  }
  isFocus(date) {
    if (this.selected && !this.selected.to) {
      return +this.toDateSeconds(date.value) == +this.toDateSeconds(this.selected.from);
    }
  }
  toDateSeconds(v) {
    return new Date( +v - ((+v) % (1000 * 60 * 60 * 24)))
  }
}
