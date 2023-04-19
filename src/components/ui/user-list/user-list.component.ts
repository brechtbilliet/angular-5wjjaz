import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { LoadingDirective } from '../../../loading.directive';
import { User } from '../../../types/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserComponent, LoadingDirective],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  hostDirectives: [
    {
      directive: LoadingDirective,
      inputs: ['loading'],
    },
  ],
})
export class UserListComponent {
  private readonly loadingDirective = inject(LoadingDirective);
  public get loading(){
    return this.loadingDirective.loading;
  }  @Input() public users: User[];
}
