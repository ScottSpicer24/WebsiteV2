import { Component, Input } from '@angular/core';
import { TlEntry } from '../../../../assets/data/datatypes';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-timeline-card',
  imports: [MatButtonModule],
  templateUrl: './timeline-card.html',
  styleUrl: './timeline-card.scss'
})
export class TimelineCard {
  @Input() item!: TlEntry;
  flipped: boolean = false;
}
