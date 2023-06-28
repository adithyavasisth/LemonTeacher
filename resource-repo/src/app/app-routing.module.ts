import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { ForumComponent } from './forum/forum.component';
import { UploadComponent } from './upload/upload.component';
import { ProfessionalOpportunitiesComponent } from './professional-opportunities/professional-opportunities.component';
import { ResourceComponent } from './resource/resource.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'upload', component: UploadComponent },
  {
    path: 'professional-opportunities',
    component: ProfessionalOpportunitiesComponent,
  },
  { path: 'resource/:id', component: ResourceComponent },
  { path: 'user', component: UserComponent },
  // add error 404 page here
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
