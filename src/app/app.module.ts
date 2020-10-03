import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { ProfilesListComponent } from './components/profiles/profiles-list/profiles-list.component';
import { ProfilesDetailComponent } from './components/profiles/profiles-detail/profiles-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersDetailComponent,
    ProfilesListComponent,
    ProfilesDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
