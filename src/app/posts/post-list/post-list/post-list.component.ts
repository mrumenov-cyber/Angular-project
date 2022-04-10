import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*posts=[
    {title: "First Post", content: "This is the first posts content"},
    {title: "Second Post", content: "This is the first posts content"},
    {title: "Third Post", content: "This is the first posts content"}
  ];*/

  @Input() posts: Post[]=[];
}
