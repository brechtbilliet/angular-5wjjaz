import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventListComponent } from '../event-list/event-list.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { UserListComponent } from '../user-list/user-list.component';
import { WritePostComponent } from '../write-post/write-post.component';
import { StoryListComponent } from '../story-list/story-list.component';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  imports: [
    CommonModule,
    EventListComponent,
    StoryListComponent,
    UserListComponent,
    WritePostComponent,
    TimelineComponent,
  ],
  standalone: true,
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
