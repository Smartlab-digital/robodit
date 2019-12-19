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
import {SearchInputComponent} from "./search-input/search-input.component";
import {FormsModule} from "@angular/forms";
import {ModalEditorComponent} from "./modal-editor/modal-editor.component";
import {CheckBoxComponent} from "./check-box/check-box.component";



@NgModule({
  declarations: [HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent, RowSelectComponent, RangeInputComponent, LineChartComponent, SearchInputComponent, ModalEditorComponent, CheckBoxComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgChartjsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent, LoginScreenComponent, ServiceLevelCardComponent, RowSelectComponent, RangeInputComponent, LineChartComponent, SearchInputComponent, ModalEditorComponent
  ]
})
export class ComponentsModule { }
