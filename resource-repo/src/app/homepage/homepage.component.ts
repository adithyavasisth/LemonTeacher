import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  appliedFilters: string[] = [];
  resources: any[];
  filteredResources: any[];

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
    private route: Router
  ) {
    this.fetchResources();
  }

  fetchResources(): void {
    this.http.get<any[]>('assets/resources.json').subscribe(
      (data) => {
        this.resources = data;
        this.applyFilters();
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
  }

  onSearch(query: string): void {
    this.searchService.search(query);
    if (query.length === 0) {
      // Show all resources
      this.filteredResources = this.resources;
    } else {
      // Filter resources based on the search query
      this.filteredResources = this.resources.filter((resource) =>
        this.searchMatch(resource, query)
      );
    }
  }

  onTileClick(resourceId: number): void {
    // Navigate to the resource page
    this.route.navigate(['/resource', resourceId]);
  }

  onAppliedFiltersChange(filters: string[]): void {
    this.appliedFilters = filters;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredResources = this.resources.filter((resource) => {
      if (this.appliedFilters.length === 0) {
        return true; // No filters applied, show all resources
      } else {
        // Check if resource matches the applied filters
        for (const filter of this.appliedFilters) {
          const [filterType, filterValue] = filter.split(': ');
          if (
            filterType === 'Subject' &&
            !resource.subject.includes(filterValue)
          ) {
            return false; // Filter doesn't match, exclude resource
          }
          if (
            filterType === 'Primary' &&
            !resource.primary.includes(filterValue)
          ) {
            return false; // Filter doesn't match, exclude resource
          }
          if (filterType === 'Type' && !resource.type.includes(filterValue)) {
            return false; // Filter doesn't match, exclude resource
          }
        }
        return true; // All filters match, include resource
      }
    });
  }

  searchMatch(resource: any, query: string): boolean {
    query = query.toLowerCase();
    // Search through all resource properties for a match
    for (const prop in resource) {
      if (
        resource.hasOwnProperty(prop) &&
        typeof resource[prop] === 'string'
      ) {
        const value = resource[prop].toLowerCase();
        if (value.includes(query)) {
          return true; // Match found, include resource
        }
      }
    }
    return false; // No match found, exclude resource
  }
}
