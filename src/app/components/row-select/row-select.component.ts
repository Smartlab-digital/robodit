import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-row-select',
  templateUrl: './row-select.component.html',
  styleUrls: ['./row-select.component.scss'],
})
export class RowSelectComponent implements OnInit {
  @Input('mode') mode: 'normal' | 'multi-rows';
  @Input('colors-schema') colorsSchema: string = 'light';
  lists: any = [];
  @Input('options')
  set options(options) {
    if (this.mode == 'multi-rows') {
      const result = [];

      for (let i = 0; i < options.length; i++) {
        let listItemIndex = i % 4;
        const listIndex = Math.floor(i / 4);
        if (listItemIndex == 0) {
          result.push([]);
        }

        result[listIndex].push(options[i]);
      }

      this.lists = result;
      return;
    }

    this.lists = [options];
  };
  @Output('selected') selectedEvent = new EventEmitter();
  selected: number = 0;

  constructor() { }

  ngOnInit() {}

  setSelected(index) {
    this.selected = index;
    this.selectedEvent.emit(this.options[index]);
  }
}
