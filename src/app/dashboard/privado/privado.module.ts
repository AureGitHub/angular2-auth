
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivadoComponent }     from './privado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule,CommonModule,    
    ],
    declarations: [PrivadoComponent],
    exports: [PrivadoComponent]
})

export class PrivadoModule { }
