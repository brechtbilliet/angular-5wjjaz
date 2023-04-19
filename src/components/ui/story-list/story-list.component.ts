import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { Story } from '../../../types/story';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  imports: [CommonModule, StoryComponent, LoadingDirective],
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
  standalone: true,
  styleUrls: ['./story-list.component.scss'],
})
export class StoryListComponent {
  @Input() public stories: Story[];
  public readonly loading = inject(LoadingDirective).loading;
}
