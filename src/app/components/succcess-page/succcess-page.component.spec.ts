import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucccessPageComponent } from './succcess-page.component';

describe('SucccessPageComponent', () => {
  let component: SucccessPageComponent;
  let fixture: ComponentFixture<SucccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucccessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
