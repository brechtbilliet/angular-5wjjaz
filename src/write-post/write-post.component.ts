import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  standalone: true,
  styleUrls: ['./write-post.component.scss']
})
export class WritePostComponent {
  @Input() public loading = true;
}
