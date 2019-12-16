import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from "./header/header.component";
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {ServiceLevelCardComponent} from "./service-level-card/service-level-card.component";
import {IonicModule} from "@ionic/angular";
import {NgChartjsModule} from "ng-chartjs";
import {RowSelectComponent} from "./row-select/row-select.component";
import {RangeInputComponent} from "./range-input/range-input.component";
import {LineChartComponent} from "./line-chart/line-chart.component";



@NgModule({
  declarations: [HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent, RowSelectComponent, RangeInputComponent, LineChartComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgChartjsModule
  ],
  exports: [
    HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent,  RowSelectComponent, RangeInputComponent, LineChartComponent
  ]
})
export class ComponentsModule { }
