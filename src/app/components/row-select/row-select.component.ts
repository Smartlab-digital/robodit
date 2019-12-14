import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-row-select',
  templateUrl: './row-select.component.html',
  styleUrls: ['./row-select.component.scss'],
})
export class RowSelectComponent implements OnInit {
  @Input('options') options: any[] = [
    '30 М',
    '1 Ч',
    '3 Ч',
    '6 Ч',
    '12 Ч',
    'День'
  ];
  selected: number = 0;

  constructor() { }

  ngOnInit() {}

}
