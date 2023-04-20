import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, from, map, Observable, of, tap } from 'rxjs';
import { EventListComponent } from '../../ui/event-list/event-list.component';
import { UserListComponent } from '../../ui/user-list/user-list.component';
import { WritePostComponent } from '../../ui/write-post/write-post.component';
import { TimelineComponent } from '../../ui/timeline/timeline.component';
import { StoryListComponent } from '../../ui/story-list/story-list.component';
import { User } from '../../../types/user';
import { Story } from '../../../types/story';
import { Event } from '../../../types/event';
import { ObservableState } from '../../../utils/observable-state';
import { events, stories, users } from '../../../data/data';
import { LoadingDirective } from '../../../loading.directive';

type FacebookState = {
  users: User[];
  usersLoading: boolean;
  stories: Story[];
  storiesLoading: boolean;
  events: Event[];
  eventsLoading: boolean;
};
type ViewModel = Pick<
  FacebookState,
  | 'users'
  | 'usersLoading'
  | 'stories'
  | 'storiesLoading'
  | 'events'
  | 'eventsLoading'
> & {
  someLoading: boolean;
};
@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  imports: [
    CommonModule,
    EventListComponent,
    StoryListComponent,
    UserListComponent,
    WritePostComponent,
    TimelineComponent
  ],
  standalone: true,
  styleUrls: ['./facebook.component.scss'],
})
export class FacebookComponent extends ObservableState<FacebookState> {
  public readonly vm$: Observable<ViewModel> = this.state$.pipe(
    map(state => {
      return {
        users: state.users,
        events: state.events,
        stories: state.stories,
        usersLoading: state.usersLoading,
        storiesLoading: state.storiesLoading,
        eventsLoading: state.eventsLoading,
        someLoading: state.usersLoading || state.storiesLoading || state.eventsLoading
      }
    })
  );
  constructor() {
    super();
    this.initialize({
      users: [],
      usersLoading: true,
      stories: [],
      storiesLoading: true,
      events: [],
      eventsLoading: true,
    });
    const events$ = of(events).pipe(
      delay(1000),
      tap(() => {
        this.patch({ eventsLoading: false });
      })
    );
    const users$ = of(users).pipe(
      delay(2000000000),
      tap(() => {
        this.patch({ usersLoading: false });
      })
    );
    const stories$ = of(stories).pipe(
      delay(3000),
      tap(() => {
        this.patch({ storiesLoading: false });
      })
    );
    this.connect({
      events: events$,
      users: users$,
      stories: stories$
    });
  }
}
