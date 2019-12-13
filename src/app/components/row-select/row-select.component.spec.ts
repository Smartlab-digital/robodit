import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RowSelectComponent } from './row-select.component';

describe('RowSelectComponent', () => {
  let component: RowSelectComponent;
  let fixture: ComponentFixture<RowSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSelectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RowSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
