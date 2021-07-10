import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents([])
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BreadcrumbComponent,
    GridComponent
  ]
})
export class ComponentsModule { }
