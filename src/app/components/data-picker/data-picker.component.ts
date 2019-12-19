import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.scss'],
})
export class DataPickerComponent implements OnInit {
  _show: boolean  = true;
  constructor() { }

  ngOnInit() {}


  show() {
    this._show = true;
  }
  hide() {
    this._show = false;
  }
}

