import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBillingComponent } from './functional/create-billing/create-billing.component';
import { CreateUserComponent } from './functional/create-user/create-user.component';
import { BillwiseDetailsComponent } from './report/billwise-details/billwise-details.component';
import { ItemwiseDetailsComponent } from './report/itemwise-details/itemwise-details.component';

//import { ResetPasswordComponent } from './functional/reset-password/reset-password.component';


const routes: Routes = [
  
  { path: 'createuser' , component: CreateUserComponent },
  { path: 'billing' , component: CreateBillingComponent },
  { path: 'billingreport' , component: BillwiseDetailsComponent },
  { path: 'itemreport' , component: ItemwiseDetailsComponent },
  { path: '' , component: CreateBillingComponent },

];
//  { path: 'reset' , component: ResetPasswordComponent },

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
