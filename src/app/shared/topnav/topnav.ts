import { Component } from '@angular/core';
import { AuthService }      from '../../auth.service';
import { Router } from '@angular/router';
@Component({
   
    selector: 'top-nav',
    templateUrl: './topnav.html',
})

export class TopNavComponent {


constructor(public authService: AuthService, public router: Router){}

	logout() {
    	this.authService.logout();
    	this.router.navigate(['login']);
	}

	login(){
		this.router.navigate(['login']);
	}
      
  

	/*
	changeTheme(color: string): void {
		
		var link: any = $('<link>');  
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  { 
		
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}
	*/
}
