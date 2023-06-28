import { Component, ViewChild, ElementRef } from '@angular/core';
import { DragDropDirective } from './drag-drop.directive';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  material: {
    type: string;
    primary: string;
    subject: string;
    title: string;
    description: string;
    file: File;
    link: string;
  } = {
    type: '',
    primary: '',
    subject: '',
    title: '',
    description: '',
    file: null,
    link: '',
  };

  selectedOption: string = 'file';
  fileName: string = ''; // Property to store the file name

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

  onSubmit(): void {
    // Handle the form submission here
    console.log('Submitted: ', this.material);
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      console.log('File Changed ', inputElement.files[0]);
      this.material.file = inputElement.files[0];
      this.fileName = inputElement.files[0].name;
    }
  }

  onFileDropped(files: FileList): void {
    if (files && files.length > 0) {
      // Process the dropped files
      console.log('File Dropped ', files);
      this.material.file = files[0];
      this.fileName = files[0].name; // Update the file name
    }
  }

  openFilePicker(event: Event): void {
    event.preventDefault(); // Prevent form submission
    this.fileInput.nativeElement.click(); // Trigger file input click event
  }
}
