import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/shared/components/admin/admin.component';
import { UsersComponent } from 'src/app/shared/components/admin/users/users.component';
import { EmailBlastComponent } from 'src/app/shared/components/admin/email-blast/email-blast.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: UsersComponent },
      { path: 'blast', component: EmailBlastComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
