import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { ProfilesListComponent } from './components/profiles/profiles-list/profiles-list.component';
import { ProfilesDetailComponent } from './components/profiles/profiles-detail/profiles-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users',
    children: [
      {path: '', component: UsersListComponent},
      {path: 'detail/:id', component: UsersDetailComponent},
      {path: 'add', component: UsersDetailComponent}
    ]
  },
  {
    path: 'profiles',
    children: [
      {path: '', component: ProfilesListComponent},
      {path: 'detail/:id', component: ProfilesDetailComponent},
      {path: 'add', component: ProfilesDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
