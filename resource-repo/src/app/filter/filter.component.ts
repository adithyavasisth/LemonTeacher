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
  units: string[] = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];

  selectedSubject: string[] = [];
  selectedPrimary: string[] = [];
  selectedType: string[] = [];
  selectedUnit: string[] = [];

  appliedFilters: string[] = [];

  @Output() appliedFiltersChange = new EventEmitter<string[]>();

  removeFilter(filter: string): void {
    const index = this.appliedFilters.indexOf(filter);
    if (index !== -1) {
      this.appliedFilters.splice(index, 1);
      const [filterType, filterValue] = filter.split(': ');
      const filterValues = filterValue.split(', ');
      if (filterType === 'Subject') {
        filterValues.forEach((value) => {
          this.selectedSubject = this.selectedSubject.filter(
            (subject) => subject !== value
          );
        });
      }
      if (filterType === 'Primary') {
        filterValues.forEach((value) => {
          this.selectedPrimary = this.selectedPrimary.filter(
            (primary) => primary !== value
          );
        });
      }
      if (filterType === 'Type') {
        filterValues.forEach((value) => {
          this.selectedType = this.selectedType.filter(
            (type) => type !== value
          );
        });
      }
      if (filterType === 'Unit') {
        filterValues.forEach((value) => {
          this.selectedUnit = this.selectedUnit.filter(
            (unit) => unit !== value
          );
        });
      }
    }

    this.appliedFiltersChange.emit(this.appliedFilters);
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
    if (this.selectedUnit.length > 0) {
      this.appliedFilters.push(`Unit: ${this.selectedUnit.join(', ')}`);
    }

    console.log(this.appliedFilters);

    this.appliedFiltersChange.emit(this.appliedFilters);
  }
}
