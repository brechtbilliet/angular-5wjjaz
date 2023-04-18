import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  standalone: true,
  styleUrls: ['./story-list.component.css'],
})
export class StoryListComponent {
  @Input() public loading = true;
}
