import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../types/user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  @Input() public loading = false;
  @Input() public users: User[];
}
