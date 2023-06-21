import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.scss']
})
export class PostTileComponent {
  @Input() post: {
    title: string;
    content: string;
    likes: number;
    isLiked: boolean;
  };

  likePost(): void {
    if (this.post.isLiked) {
      this.post.likes--;
    } else {
      this.post.likes++;
    }
    this.post.isLiked = !this.post.isLiked;
  }
}
