import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event } from '../../../types/event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  imports: [NgOptimizedImage, CommonModule],
  standalone: true,
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() public loading = false;
  @Input() public event: Event;
}

// todo: HostDirective om loading class hier op te zetten:
// <selector>--loading