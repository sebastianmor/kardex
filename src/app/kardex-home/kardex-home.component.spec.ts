import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexHomeComponent } from './kardex-home.component';

describe('KardexHomeComponent', () => {
  let component: KardexHomeComponent;
  let fixture: ComponentFixture<KardexHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
