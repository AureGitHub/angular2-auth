
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent }    from './admin.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [RouterModule,CommonModule,    
    ],
    declarations: [AdminComponent],
    exports: [AdminComponent]
})

export class AdminModule { }
