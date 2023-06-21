import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent {
  appliedFilters: string[] = [];

  posts: any[] = [
    {
      title: 'Post 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      likes: 10
    },
    {
      title: 'Post 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: 5
    },
    {
      title: 'Post 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      likes: 3
    }
  ];


  constructor(private searchService: SearchService) {}

  onSearch(query: string): void {
    this.searchService.search(query);
  }

  onAppliedFiltersChange(filters: string[]): void {
    this.appliedFilters = filters;
    // Access the appliedFilters array and perform any required actions
  }
}
