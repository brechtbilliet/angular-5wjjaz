import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  imports: [NgOptimizedImage, CommonModule, LoadingDirective],
  standalone: true,
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
  styleUrls: ['./write-post.component.scss'],
})
export class WritePostComponent {
  private readonly loadingDirective = inject(LoadingDirective);
  public get loading() {
    return this.loadingDirective.loading;
  }
}
