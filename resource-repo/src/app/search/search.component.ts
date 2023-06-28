import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchText: string = '';
  public isSearching: boolean = false;
  @Output() searchEvent = new EventEmitter<string>();

  search(): void {
    if (!this.isSearching && this.searchText) {
      // Perform search operation with searchText
      this.searchEvent.emit(this.searchText);
      this.isSearching = true;
    } else {
      this.clearSearch();
    }
  }

  clearSearch(): void {
    this.searchText = '';
    this.isSearching = false;
    this.searchEvent.emit('');
  }
}
