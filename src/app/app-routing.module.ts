import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {
		path: 'page',
		loadChildren: () =>
			import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard]
	},
  { path: '**', redirectTo: 'app', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
