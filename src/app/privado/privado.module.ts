import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PrivadoComponent }     from './privado.component';



import { PrivadoRoutingModule } from './privado-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrivadoRoutingModule
    
  ],
  declarations: [
    PrivadoComponent
  ],
  providers: []
})
export class PrivadoModule {}