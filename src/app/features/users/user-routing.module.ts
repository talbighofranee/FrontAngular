import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListuserComponent } from 'src/app/listuser/listuser.component';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { UpdateuserComponent } from 'src/app/updateuser/updateuser.component';
import { UserQRCodeComponent } from 'src/app/user-qr-code/user-qr-code.component';
import { AuthGuard } from 'src/app/Services/AuthGuard';

const routes: Routes = [
  {path:'listuser',component:ListuserComponent},
  {path:'adduser',component:AddUserComponent },
  { path: 'updateuser/:id', component: UpdateuserComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }