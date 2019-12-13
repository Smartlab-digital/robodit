import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RangeInputComponent } from './range-input.component';

describe('RangeInputComponent', () => {
  let component: RangeInputComponent;
  let fixture: ComponentFixture<RangeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
