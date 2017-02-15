import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';

@Component({
  selector: 'app-privado',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent {

  constructor() { }

 
@ViewChild('childModal') public childModal:ModalDirective;

	// Button
	public singleModel:string = '1';
	public radioModel:string = 'Middle';
	public checkModel:any = {left: false, middle: true, right: false};

	public alerts:Array<Object> = [
	   {
	     type: 'danger',
	     msg: 'Oh snap! Change a few things up and try submitting again.'
	   },
	   {
	     type: 'success',
	     msg: 'Well done! You successfully read this important alert message.',
	     closable: true
	   }
	 ];

	 public closeAlert(i:number):void {
	   this.alerts.splice(i, 1);
	 }

}
