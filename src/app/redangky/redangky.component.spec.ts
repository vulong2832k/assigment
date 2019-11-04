import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedangkyComponent } from './redangky.component';

describe('RedangkyComponent', () => {
  let component: RedangkyComponent;
  let fixture: ComponentFixture<RedangkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedangkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedangkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
