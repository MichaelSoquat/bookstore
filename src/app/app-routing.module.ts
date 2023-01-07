import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modules/core/menu/menu.component';
import { NewUserComponent } from './modules/core/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'neuerNutzer', component: NewUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
