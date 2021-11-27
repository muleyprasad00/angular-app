import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
	{ path:'', component:PagesComponent,
		children:[
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: ':name',
				loadChildren: () =>
					import('./page/page.module').then(m => m.PageModule),
			},
			{
				path: 'add-edit/:name/:id',
				loadChildren: () =>
					import('./add-edit-form/add-edit-form.module').then(m => m.AddEditFormModule),
			},
			{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
		]	
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
