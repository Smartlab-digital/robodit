import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {ServiceLevelCardComponent} from "./service-level-card/service-level-card.component";
import {LineHandlerCardComponent} from "./line-handler-card/line-handler-card.component";
import {IonicModule} from "@ionic/angular";
import {NgChartjsModule} from "ng-chartjs";



@NgModule({
  declarations: [HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent, LineHandlerCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgChartjsModule
  ],
  exports: [
    HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent, LineHandlerCardComponent
  ]
})
export class ComponentsModule { }
