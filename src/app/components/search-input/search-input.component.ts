import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input('show-left-btn') showLeftBtn: boolean = true;

  show: boolean = false;

  constructor() { }

  ngOnInit() {}

}
