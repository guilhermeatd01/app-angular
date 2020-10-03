import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {
    path: 'users',
    children: [
      {path: '', component: UsersListComponent},
      {path: 'detail/:id', component: UsersAddComponent},
      {path: 'add', component: UsersAddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
