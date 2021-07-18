import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
