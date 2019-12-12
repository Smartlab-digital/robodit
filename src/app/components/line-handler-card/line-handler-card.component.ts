import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-handler-card',
  templateUrl: './line-handler-card.component.html',
  styleUrls: ['./line-handler-card.component.scss'],
})
export class LineHandlerCardComponent implements OnInit {
  @Input('mode') mode: 'border' | 'background' = null;

  constructor() { }

  ngOnInit() {}

}
