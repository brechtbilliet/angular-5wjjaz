import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent  {
  @Input() public loading = true;
}
