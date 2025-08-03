import { Component, Input } from '@angular/core';
import { Degree } from '../../../../assets/data/datatypes';

@Component({
  selector: 'app-timeline-card',
  imports: [],
  templateUrl: './timeline-card.html',
  styleUrl: './timeline-card.scss'
})
export class TimelineCard {
  @Input() item!: Degree;
}
