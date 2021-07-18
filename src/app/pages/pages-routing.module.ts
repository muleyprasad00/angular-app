import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'page/dashboard', pathMatch: 'full' },
	{
		path: 'page/:name',
		loadChildren: () =>
			import('./page/page.module').then(m => m.PageModule),
	},
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./dashboard/dashboard.module').then(m => m.DashboardModule),
	},
	{
		path: 'booking',
		loadChildren: () =>
			import('./booking/booking.module').then(m => m.BookingModule),
	},
	{
		path: 'add-edit',
		loadChildren: () =>
			import('./add-edit-form/add-edit-form.module').then(m => m.AddEditFormModule),
	},
	{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
