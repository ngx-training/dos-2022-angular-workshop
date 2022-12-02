import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://ngx-training.com/posts';

  constructor(private httpClient: HttpClient) { }

  loadPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postUrl);
  }

  loadPostById(id: number): Observable<Post> {
    const url = this.postUrl + '/' + id;
    return this.httpClient.get<Post>(url);
  }

  searchPosts(): Observable<Post[]> {
    return this.httpClient.post<Post[]>(this.postUrl, 'body');
  }
}
