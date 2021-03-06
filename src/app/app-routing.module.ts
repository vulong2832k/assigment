import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoginComponent } from './login/login.component';
import { DangkyComponent } from './dangky/dangky.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { RedangkyComponent } from './redangky/redangky.component';

const routes: Routes = [
  { path: '', component: TrangchuComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dangky', component: DangkyComponent},
  { path: 'lienhe', component: LienheComponent},
  { path: 'redangky', component: RedangkyComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
