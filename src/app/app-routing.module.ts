import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueDetailsComponent } from './issue-list/issue-details/issue-details.component';

const routes: Routes = [
  {path:'',component:IssueListComponent},
  {path:'users/:id',component:IssueDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
