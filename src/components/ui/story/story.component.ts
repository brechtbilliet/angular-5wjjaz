import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Story } from '../../../types/story';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent  {
  @Input() public loading = false;
  @Input() public story: Story|null;
}
