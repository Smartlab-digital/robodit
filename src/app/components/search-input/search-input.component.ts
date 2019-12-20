import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input('show-left-btn') showLeftBtn: boolean = true;

  _show: boolean = false;
  get show ():boolean {
    return this._show;
  }
  set show(value:boolean) {
    this._show = value;

    setTimeout(() => {
      window.scrollTo(1, 1);
    });
  }

  constructor() { }

  ngOnInit() {}

}
