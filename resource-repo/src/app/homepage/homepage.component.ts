import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  appliedFilters: string[] = [];
  resources: any[];

  constructor(private searchService: SearchService, private http: HttpClient) {
    this.fetchResources();
  }

  fetchResources(): void {
    this.http.get<any[]>('assets/resources.json').subscribe(
      (data) => {
        this.resources = data;
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
  }

  onSearch(query: string): void {
    this.searchService.search(query);
  }

  onAppliedFiltersChange(filters: string[]): void {
    this.appliedFilters = filters;
    // Access the appliedFilters array and perform any required actions
  }
}
