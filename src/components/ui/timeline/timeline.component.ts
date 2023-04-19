import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  imports: [CommonModule, LoadingDirective],
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {}
