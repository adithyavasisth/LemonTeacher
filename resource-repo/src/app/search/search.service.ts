import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(query: string): void {
    console.log('Searching for:', query);
  }
}
