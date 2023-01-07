import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './modules/core/nav/nav.component';
import { MainComponent } from './modules/core/main/main.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { NewUserComponent } from './modules/core/new-user/new-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
