
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivadoComponent }     from './privado.component';
import { CommonModule } from '@angular/common';
import { EditService } from '../../_service/edit.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { Jsonp, JsonpModule } from '@angular/http';

@NgModule({
    imports: [RouterModule,CommonModule,   GridModule,  JsonpModule
    ],
    declarations: [PrivadoComponent],
    exports: [PrivadoComponent],
     providers: [ {
            deps: [Jsonp],
            provide: EditService,
            useFactory: (jsonp: Jsonp) => () => new EditService(jsonp)
        }],
})

export class PrivadoModule { }
