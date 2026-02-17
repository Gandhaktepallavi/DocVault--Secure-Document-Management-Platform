import { Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { DocumentListComponent } from './document-list/document-list.component';

export const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'documents', component: DocumentListComponent }
];
