import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteBookComponent } from './modules/core/delete-book/delete-book.component';
import { EditBookComponent } from './modules/core/edit-book/edit-book.component';
import { MainComponent } from './modules/core/main/main.component';
import { NewBookComponent } from './modules/core/new-book/new-book.component';
import { NewUserComponent } from './modules/core/new-user/new-user.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'neuerNutzer', component: NewUserComponent },
  { path: 'neuesBuch', component: NewBookComponent },
  { path: 'BuchBearbeiten', component: EditBookComponent },
  { path: 'BuchLoeschen', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
