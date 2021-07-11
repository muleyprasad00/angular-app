import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditFormRoutingModule } from './add-edit-form-routing.module';
import { AddEditFormComponent } from './add-edit-form.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AddEditFormComponent
  ],
  imports: [
    CommonModule,
    AddEditFormRoutingModule,
    ComponentsModule
  ]
})
export class AddEditFormModule { }
