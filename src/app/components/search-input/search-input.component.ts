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
      const doc = document.getElementById('content');

      let i = 0;
      window.requestAnimationFrame( function rep() {
        doc.style.paddingBottom = i % 19  + 'px';
        console.log(i++);

        if (i < 10) {
          window.requestAnimationFrame(rep);
        } else {
          doc.style.paddingBottom = '0px';
        }
      })
    });
  }

  constructor() { }

  ngOnInit() {}

}
