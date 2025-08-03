import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCard } from './timeline-card';

describe('TimelineCard', () => {
  let component: TimelineCard;
  let fixture: ComponentFixture<TimelineCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
