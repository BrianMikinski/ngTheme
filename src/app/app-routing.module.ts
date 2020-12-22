import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanFormComponent } from './loan-form/loan-form.component';

const routes: Routes = [
  { path: 'loanform', component: LoanFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
