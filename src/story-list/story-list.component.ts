import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  imports: [CommonModule, StoryComponent],
  standalone: true,
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent {
  @Input() public loading = true;
}
