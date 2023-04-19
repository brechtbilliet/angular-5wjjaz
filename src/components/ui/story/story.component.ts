import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { Story } from '../../../types/story';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, LoadingDirective],
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
  @Input() public story: Story | null;
  private readonly loadingDirective = inject(LoadingDirective);
  public get loading(){
    return this.loadingDirective.loading;
  }
}
