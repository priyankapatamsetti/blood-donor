import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMtComponent } from './login-mt.component';

describe('LoginMtComponent', () => {
  let component: LoginMtComponent;
  let fixture: ComponentFixture<LoginMtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
