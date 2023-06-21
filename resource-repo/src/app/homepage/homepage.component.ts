import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  appliedFilters: string[] = [];

  resources: any[] = [
    {
      type: 'Type 1',
      primary: 'Primary 1',
      subject: 'Math',
      title: 'Resource 1',
    },
    {
      type: 'Type 2',
      primary: 'Primary 2',
      subject: 'Science',
      title: 'Resource 2',
    },
    {
      type: 'Type 3',
      primary: 'Primary 3',
      subject: 'English',
      title: 'Resource 3',
    },
    // Add more dummy data for additional tiles
    {
      type: 'Type 1',
      primary: 'Primary 1',
      subject: 'Math',
      title: 'Resource 4',
    },
    {
      type: 'Type 2',
      primary: 'Primary 2',
      subject: 'Science',
      title: 'Resource 5',
    },
    {
      type: 'Type 3',
      primary: 'Primary 3',
      subject: 'English',
      title: 'Resource 6',
    },
    {
      type: 'Type 1',
      primary: 'Primary 1',
      subject: 'Math',
      title: 'Resource 7',
    },
    {
      type: 'Type 2',
      primary: 'Primary 2',
      subject: 'Science',
      title: 'Resource 8',
    },
    {
      type: 'Type 3',
      primary: 'Primary 3',
      subject: 'English',
      title: 'Resource 9',
    },
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
