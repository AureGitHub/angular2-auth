import { Component } from '@angular/core';
import { products } from './products';
import {
	GridDataResult,
	PageChangeEvent
} from '@progress/kendo-angular-grid';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({

	selector: 'timeline-cmp',
	templateUrl: './timeline.html',

})
export class TimelineComponent { }

@Component({

	selector: 'chat-cmp',
	templateUrl: './chat.html'
})
export class ChatComponent { }

@Component({

	selector: 'notifications-cmp',
	templateUrl: './notifications.html'
})
export class NotificationComponent { }

@Component({

	selector: 'home-cmp',
	templateUrl: './home.component.html'

})




export class HomeComponent {

public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

    public value = ['Basketball', 'Cricket']


	private gridView: GridDataResult;
	private pageSize: number = 10;
	private skip: number = 0;
	private gridData: any[] = products;
	title = 'Hello World!';
	onButtonClick() {
		this.title = 'Hello from Kendo UI!';
	}

	/* Carousel Variable */
	myInterval: number = 5000;
	index: number = 0;
	slides: Array<any> = [];
	imgUrl: Array<any> = [
		`assets/img/slider1.jpg`,
		`assets/img/slider2.jpg`,
		`assets/img/slider3.jpg`,
		`assets/img/slider0.jpg`
	];
	/* END */
	/* Alert component */
	public alerts: Array<Object> = [
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

	public closeAlert(i: number): void {
		this.alerts.splice(i, 1);
	}
	/* END*/

	constructor() {

		this.loadProducts();
		for (let i = 0; i < 4; i++) {
			this.addSlide();
		}
	}


	protected pageChange(event: PageChangeEvent): void {
		this.skip = event.skip;
		this.loadProducts();

	}
	private loadProducts(): void {
		this.gridView = {
			data: this.gridData.slice(this.skip, this.skip + this.pageSize),
			total: this.gridData.length
		};
	}

	/* Carousel */
	addSlide() {
		let i = this.slides.length;
		this.slides.push({
			image: this.imgUrl[i],
			text: `${['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4]}
      			${['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]}`
		});
	}
	/* END */
}
