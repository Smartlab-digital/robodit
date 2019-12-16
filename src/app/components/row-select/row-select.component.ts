import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output('selected') selectedEvent = new EventEmitter();
  selected: number = 0;

  constructor() { }

  ngOnInit() {}

  setSelected(index) {
    this.selected = index;
    this.selectedEvent.emit(this.options[index]);
  }
}
