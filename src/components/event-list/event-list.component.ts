import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  imports: [CommonModule, EventComponent],
  standalone: true,
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  @Input() public loading = true;
}
