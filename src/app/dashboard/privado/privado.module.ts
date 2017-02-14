
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PrivadoComponent }     from './privado.component';

@NgModule({
    imports: [RouterModule],
    declarations: [PrivadoComponent],
    exports: [PrivadoComponent]
})

export class PrivadoModule { }
