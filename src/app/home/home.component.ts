import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../services/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // posts: Post[] = [];
  posts$!: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts$ = this.postService.loadPosts();

    /*this.postService.loadPosts().subscribe(result => {
      this.posts = result;
    }, error => {
      console.error(error);
    });*/
  }

}
