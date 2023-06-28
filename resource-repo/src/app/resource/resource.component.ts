import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent implements OnInit {
  resource: any;
  stars: number[] = [1, 2, 3, 4, 5];
  newComment: string = ''; // Variable to store the new comment
  comments: string[] = ['This resource is very helpful.']; // Array to store the list of comments
  isResourceSaved: boolean = false; // Variable to store the saved state of the resource

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Read the resource ID from the URL params
    this.route.params.subscribe((params) => {
      const resourceId = params['id'];
      // Fetch the resource from the JSON asset based on the ID
      this.http.get<any[]>('assets/resources.json').subscribe((data) => {
        this.resource = data.find((resource) => resource.id === +resourceId);
      });
    });
  }

  downloadPDF(pdfLink: string): void {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfLink;
    link.target = '_blank';
    link.download = 'resource.pdf'; // Set the desired file name

    // Simulate a click event to trigger the download
    link.click();
  }

  rateResource(star: number): void {
    // Perform any rating-related logic here
    this.resource.rating = star;
  }

  // Function to add a new comment
  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = ''; // Clear the new comment input field
    }
  }

  saveResource() {
    this.isResourceSaved = !this.isResourceSaved;
  }
}
