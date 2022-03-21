import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  sub: any;
  posts: any;

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.sub = this.service.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  } 
} 
