import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() type: string;
  @Input() primary: string;
  @Input() subject: string;
  @Input() title: string;
}
