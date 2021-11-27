import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [  
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule,
    NgxSpinnerModule
  ]
})
export class PagesModule { }
