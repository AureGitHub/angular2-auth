import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { AdminComponent }    from './admin.component';
import { AdminApuestaComponent }  from './admin-apuesta/admin-apuesta.component';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard }                from './admin-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
    
  ],
  declarations: [
    AdminComponent,
    AdminApuestaComponent
    
  ],
  providers: [AdminGuard]
})
export class AdminModule {}