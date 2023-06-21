import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ForumComponent } from './forum/forum.component';
import { UploadComponent } from './upload/upload.component';
import { ProfessionalOpportunitiesComponent } from './professional-opportunities/professional-opportunities.component';
import { ChatbotDialogComponent } from './chatbot-dialog/chatbot-dialog.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TileComponent } from './homepage/tile/tile.component';
import { PostTileComponent } from './forum/post-tile/post-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ForumComponent,
    UploadComponent,
    ProfessionalOpportunitiesComponent,
    ChatbotDialogComponent,
    FilterComponent,
    SearchComponent,
    TileComponent,
    PostTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}