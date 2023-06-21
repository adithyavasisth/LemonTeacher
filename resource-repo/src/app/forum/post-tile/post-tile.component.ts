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
  };

  likePost(): void {
    // Implement your logic for liking the post
    this.post.likes++;
  }
}
