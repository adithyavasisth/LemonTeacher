import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  subjects: string[] = ['Math', 'Science', 'English'];
  primaries: string[] = ['Primary 1', 'Primary 2', 'Primary 3'];
  types: string[] = ['Type 1', 'Type 2', 'Type 3'];

  selectedSubject: string[] = [];
  selectedPrimary: string[] = [];
  selectedType: string[] = [];

  appliedFilters: string[] = [];

  @Output() appliedFiltersChange = new EventEmitter<string[]>();

  removeFilter(filter: string): void {
    const index = this.appliedFilters.indexOf(filter);
    if (index !== -1) {
      this.appliedFilters.splice(index, 1);
    }
  }

  applyFilters(): void {
    this.appliedFilters = [];
    if (this.selectedSubject.length > 0) {
      this.appliedFilters.push(`Subject: ${this.selectedSubject.join(', ')}`);
    }
    if (this.selectedPrimary.length > 0) {
      this.appliedFilters.push(`Primary: ${this.selectedPrimary.join(', ')}`);
    }
    if (this.selectedType.length > 0) {
      this.appliedFilters.push(`Type: ${this.selectedType.join(', ')}`);
    }

    console.log(this.appliedFilters);

    this.appliedFiltersChange.emit(this.appliedFilters);
  }
}
