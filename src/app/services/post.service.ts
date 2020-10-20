import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): any {
    return this.http.get(`${environment.apiUrl}/posts`).pipe(map(res => res));
  }

  getPost(postId): any {
    return this.http.get(`${environment.apiUrl}/posts/${postId}`).pipe(map(res => res));
  }
}
