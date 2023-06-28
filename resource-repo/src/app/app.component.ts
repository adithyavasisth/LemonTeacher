import { Component, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('chatbotDialog') chatbotDialog!: TemplateRef<any>;
  title = 'Lemon Teacher';

  constructor(private dialog: MatDialog) {}

  openChatbotDialog(): void {
    const dialogRef = this.dialog.open(this.chatbotDialog, {
      width: '400px',
    });

    // Handle dialog close event if needed
    dialogRef.afterClosed().subscribe(() => {
      // Handle any necessary actions
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
