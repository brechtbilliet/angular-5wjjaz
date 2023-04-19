import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { User } from '../../../types/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  imports: [NgOptimizedImage, CommonModule, LoadingDirective],
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
  standalone: true,
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() public loading = false;
  @Input() public user: User | null = null;
}
