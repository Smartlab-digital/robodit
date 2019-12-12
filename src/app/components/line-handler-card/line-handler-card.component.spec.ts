import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineHandlerCardComponent } from './line-handler-card.component';

describe('LineHandlerCardComponent', () => {
  let component: LineHandlerCardComponent;
  let fixture: ComponentFixture<LineHandlerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineHandlerCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineHandlerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
