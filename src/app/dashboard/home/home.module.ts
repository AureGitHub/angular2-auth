
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BSComponentModule } from '../bs-component/bsComponent.module';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HomeComponent }     from './home.component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [RouterModule,CommonModule,BSComponentModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
