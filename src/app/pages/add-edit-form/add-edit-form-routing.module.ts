import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditFormComponent } from './add-edit-form.component';

const routes: Routes = [{ path: '', component: AddEditFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditFormRoutingModule { }
