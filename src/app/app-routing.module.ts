import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './modules/core/nav/nav.component';
import { NewUserComponent } from './modules/core/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'neuerNutzer', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
