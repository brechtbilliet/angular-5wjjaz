import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event } from '../../../types/event';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  imports: [CommonModule, EventComponent],
  standalone: true,
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  @Input() public loading = true;
  @Input() public events: Event[];
}
