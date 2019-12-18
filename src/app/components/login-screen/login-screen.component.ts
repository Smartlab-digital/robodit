import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  show:boolean = true;
  animationTrigger: boolean = true;
  animation: number = 0;


  next () {
    this.animation++;

    if (this.animation > 3) {
      this.show = false;
    } else {
      this.animationTrigger = !this.animationTrigger;
    }
  }

}
