import { Component } from '@angular/core';
import { AuthService }      from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public authService: AuthService, public router: Router){
     
       authService.reload();
  }

  conectado() : boolean {
    return this.authService.isLoggedIn;
  }

   logout() {
    this.authService.logout();
    this.router.navigate(['inicio']);
    
  }

  esAdmin():boolean{
    return this.authService.userConnect && this.authService.userConnect.idRol==1;}

  title = 'app works!';
}
