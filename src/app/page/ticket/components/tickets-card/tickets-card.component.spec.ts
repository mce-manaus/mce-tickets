import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsCardComponent } from './tickets-card.component';

describe('TicketsCardComponent', () => {
  let component: TicketsCardComponent;
  let fixture: ComponentFixture<TicketsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsCardComponent]
    });
    fixture = TestBed.createComponent(TicketsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
