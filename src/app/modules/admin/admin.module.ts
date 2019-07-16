import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from 'src/app/shared/components/admin/admin.component';
import { EmailBlastComponent } from '../../shared/components/admin/email-blast/email-blast.component';
import { UsersComponent } from '../../shared/components/admin/users/users.component';

@NgModule({
  declarations: [
    AdminComponent,
    EmailBlastComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
