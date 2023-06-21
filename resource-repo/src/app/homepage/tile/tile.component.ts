import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() type: string;
  @Input() primary: string;
  @Input() subject: string;
  @Input() title: string;
  @Input() rating: number;
  @Input() reviewsCount: number;

  stars: boolean[];

  constructor() {
    this.stars = [];
  }

  ngOnInit() {
    this.fillStars();
  }

  fillStars() {
    const filledStars = Math.round(this.rating); // Assuming the rating is a decimal value
    for (let i = 0; i < 5; i++) {
      this.stars.push(i < filledStars);
    }
  }
}
