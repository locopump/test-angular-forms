import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { CustomerComponent } from './shared/components/customer/customer.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'user', component: UserSettingsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
