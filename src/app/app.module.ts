import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailsComponent } from './issue-list/issue-details/issue-details.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
