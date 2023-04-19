import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { Event } from '../../../types/event';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  imports: [NgOptimizedImage, CommonModule, LoadingDirective],
  hostDirectives: [{
    directive: LoadingDirective,
    inputs: ['loading']
  }],
  standalone: true,
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() public event: Event|null;
}

// todo: HostDirective om loading class hier op te zetten:
// <selector>--loading