import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginMtComponent } from './login-mt/login-mt.component';

const routes: Routes = [
// {path: '', component: LoginMtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
