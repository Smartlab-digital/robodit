import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.scss'],
})
export class RangeInputComponent implements OnInit {
  @ViewChild('cursor', null) cursor: ElementRef;
  @ViewChild('box', null) box: ElementRef;
  @Output('value') onValue = new EventEmitter();
  active: boolean = false;

  @Input('type') type: 'range' | 'select' = 'select';
  @Input('options') options: {
    to: number,
    from: number,
    label: string,
    value?: any
  }[] = [
    {
      label: '30М',
      from: 0,
      to: 0.15
    },
    {
      label: '6Ч',
      from: 0.15,
      to: 0.5
    },
    {
      label: '12Ч',
      from: 0.5,
      to: 0.75
    },
    {
      label: '24Ч',
      from: 0.75,
      to: 1
    }
  ];

  get height() {
    return this.box.nativeElement.clientHeight - this.cursor.nativeElement.clientHeight -4;
  }

  constructor() {}

  ngOnInit() {
    if (this.type == 'select') {
      this._value = this.options[0];
    }
  }

  _value: any;
  public get value() {
    if (this.type === 'select') {
      return this._value;
    }
    return this.offset / this.height;
  }

  _offset: number = 0;

  get offset() {
    return this._offset;
  }
  set offset(v) {
    v = Math.min(this.height, Math.max(0, v));

    this._offset = v;
    this.cursor.nativeElement.style.marginBottom = v + 'px';

    if (this.type == 'select') {
      for (let opt of this.options) {
        let offset = this.offset / this.height;
        if (opt.from <= offset && opt.to >= offset) {
          this._value = opt;
          return;
        }
      }
    }
  }

  startPoint: number;
  startValue: any;
  startMove(e) {
    this.startValue = this.value;
    this.active = true;
    e.stopPropagation();
    e.preventDefault();
    this.startPoint = e.touches[0].pageY + this.offset;
  }
  move(e) {
    e.stopPropagation();
    e.preventDefault();
    this.offset = this.startPoint - e.touches[0].pageY;
  }
  endMove(e) {
    this.active = false;
    if (this.value != this.startValue)
      this.onValue.emit(this.value);
  }
}
