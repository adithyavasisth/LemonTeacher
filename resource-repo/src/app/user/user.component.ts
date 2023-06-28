import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  selectedOption: string;
  appliedFilters: string[] = [];
  resources: any[];
  filteredResources: any[];

  profile: any = {
    name: 'John Doe',
    email: 'johndoe@xample.com',
    phone: '1234567890',
  };

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
    private route: Router
  ) {
    this.fetchResources();
    this.selectedOption = 'savedResources';
  }

  fetchResources(): void {
    this.http.get<any[]>('assets/resources.json').subscribe(
      (data) => {
        // select 4 random resources from data
        this.resources = data
          .sort(() => Math.random() - Math.random())
          .slice(0, 4);
        this.applyFilters();
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
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

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  onSearch(searchTerm: string): void {
    this.searchService.search(searchTerm);
    if (searchTerm.length === 0) {
      // Show all resources
      this.filteredResources = this.resources;
    } else {
      // Filter resources based on the search query
      this.filteredResources = this.resources.filter((resource) =>
        this.searchMatch(resource, searchTerm)
      );
    }
  }

  searchMatch(resource: any, query: string): boolean {
    query = query.toLowerCase();
    // Search through all resource properties for a match
    for (const prop in resource) {
      if (resource.hasOwnProperty(prop) && typeof resource[prop] === 'string') {
        const value = resource[prop].toLowerCase();
        if (value.includes(query)) {
          return true; // Match found, include resource
        }
      }
    }
    return false; // No match found, exclude resource
  }

  onAppliedFiltersChange(filters: any): void {
    this.appliedFilters = filters;
    this.applyFilters();
  }

  onTileClick(resourceId: string): void {
    // Navigate to the resource page
    this.route.navigate(['/resource', resourceId]);
  }
}
