import { Component } from '@angular/core';
import { SearchService } from '../search/search.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent {
  appliedFilters: string[] = [];
  posts: any[];

  constructor(private searchService: SearchService, private http: HttpClient) {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<any[]>('assets/posts.json').subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
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
