import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../app/components/landing-page/landing-page.component';

import { AuthloginComponent } from '../../src/app/components/AuthModule/authlogin/authlogin.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
 
  {path: 'Authlogin', component: AuthloginComponent,}, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
