import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsadminComponent } from './msadmin.component';

describe('MsadminComponent', () => {
  let component: MsadminComponent;
  let fixture: ComponentFixture<MsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
