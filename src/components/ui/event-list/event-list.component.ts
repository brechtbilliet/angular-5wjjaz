import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { Event } from '../../../types/event';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  imports: [CommonModule, EventComponent, LoadingDirective],
  hostDirectives: [{
    directive: LoadingDirective,
    inputs: ['loading']
  }],
    standalone: true,
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  @Input() public events: Event[];
  public readonly loading = inject(LoadingDirective).loading;
}
