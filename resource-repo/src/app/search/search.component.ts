import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchText: string;
  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    console.log(this.searchText);
    this.searchEvent.emit(this.searchText);
  }
}
