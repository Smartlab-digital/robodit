import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  @Input('colors-schema') colorsSchema: 'dark' | 'light' = 'light';

  active: boolean = true;

  constructor() { }

  ngOnInit() {}



}
