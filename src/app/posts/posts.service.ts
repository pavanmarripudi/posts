import { Injectable } from '@angular/core';
import { TPost } from 'src/app/posts/types/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private likes: TPost[] = [];


  constructor() {}

  getLikes(): TPost[] {
    return [...this.likes];
  }

  addLike(like: TPost) {
    this.likes.push(like);
  }
}
