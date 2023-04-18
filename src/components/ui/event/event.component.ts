import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  standalone: true,
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  @Input() public loading = true;
}
