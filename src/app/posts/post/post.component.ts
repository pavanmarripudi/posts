import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TPost } from '../types/post.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input('post') post: TPost;
  @Output('delete') postDelete: EventEmitter<number> = new EventEmitter();
  @Output('like') postLike: EventEmitter<number> = new EventEmitter();
 
  
  constructor() {}

  ngOnInit(): void {}

  handleDelete(): void {
    console.log(this.post.id);
    this.postDelete.emit(this.post.id);
  }

  handleLike(): void {
    console.log(this.post.id);
    this.postLike.emit(this.post.id);
  }
}