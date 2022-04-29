import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';

import { AppRoutingModule} from "src/app/app-routing.module";

@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [CommonModule,AppRoutingModule],
  exports: [PostsComponent]
})
export class PostsModule {}



