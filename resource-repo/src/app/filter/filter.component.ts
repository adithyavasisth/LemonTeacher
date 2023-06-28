import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  subjects: string[] = [
    'Math',
    'Science',
    'English',
    'General',
    'Malay',
    'Other',
  ];
  primaries: string[] = ['Primary 1', 'Primary 2', 'Primary 3'];
  types: string[] = ['Worksheet', 'Exercise', 'Game', 'Video', 'Other'];

  selectedSubject: string[] = [];
  selectedPrimary: string[] = [];
  selectedType: string[] = [];

  appliedFilters: string[] = [];

  @Output() appliedFiltersChange = new EventEmitter<string[]>();

  removeFilter(filter: string): void {
    const index = this.appliedFilters.indexOf(filter);
    if (index !== -1) {
      this.appliedFilters.splice(index, 1);
      const [filterType, filterValue] = filter.split(': ');
      if (filterType === 'Subject') {
        this.selectedSubject = this.selectedSubject.filter((subject) => subject !== filterValue);
      }
      if (filterType === 'Primary') {
        this.selectedPrimary = this.selectedPrimary.filter((primary) => primary !== filterValue);
      }
      if (filterType === 'Type') {
        this.selectedType = this.selectedType.filter((type) => type !== filterValue);
      }
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
