import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiHostComponent } from './noti-host.component';

describe('NotiHostComponent', () => {
  let component: NotiHostComponent;
  let fixture: ComponentFixture<NotiHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotiHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
