import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRendererComponent } from './grid/btn-cell-renderer/btn-cell-renderer.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridComponent,
    BtnCellRendererComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridComponent,
    DynamicFormComponent
  ]
})
export class ComponentsModule { }
