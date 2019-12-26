import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-editor',
  templateUrl: './modal-editor.component.html',
  styleUrls: ['./modal-editor.component.scss'],
})
export class ModalEditorComponent implements OnInit {
  _show: boolean = false;
  editMode: boolean  = false;

  timers = [
    '15 M',
    '30 М',
    '1 Ч',
    '12 Ч',
    'День',
    '1н',
    '1мес'
  ];
  minitimers = [
    '1 С',
    '1 М',
    '15 M',
    '30 М',
    '1 Ч',
    'День'
  ]

  constructor() { }

  ngOnInit() {}

  show(editMode = false) {
    this.editMode = editMode;
    this._show = true;
    return;
  }
  hide() {
    this._show = false;
    return;
  }
}
