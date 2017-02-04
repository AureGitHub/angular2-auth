import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


import { User } from './_models/user';

@Injectable()
export class AuthService {

public token: string;
private Url = 'http://localhost:51098/login';

 private localStorage_currentUser = 'currentUser';
 
 private userConnect : User =null;

 isLoggedIn:boolean = false;
 


  // store the URL so we can redirect after logging in
  redirectUrl: string;


constructor(private http: Http) {

   var currentUser = JSON.parse(localStorage.getItem(this.localStorage_currentUser));
        
        this.token = currentUser && currentUser.token;
 }
 

  login(): Observable<boolean> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
  var user = {
          username:'aalonso',
          password : '123456'
        };
    return this.http
               .post(this.Url,JSON.stringify(user),options)
                .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().Security  &&  response.json().Security.token;
                if (token) {
                    // set token property
                    this.token = token;
                    this.isLoggedIn = true;

                    this.userConnect  = { 
                      id :  response.json().Security.user.id,
                      username :  response.json().Security.user.username,
                      idRol :  response.json().Security.user.IdRol,
                      name :  response.json().Security.user.Nombre,
                      expires: response.json().Security.expires,
                      token: response.json().Security.token
                    };
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.userConnect));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    this.isLoggedIn = false;
                    return false;
                    
                }
            });
              
    
  }

  esAdmin():boolean{
    return this.userConnect && this.userConnect.idRol==1;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.localStorage_currentUser);
  }

  reload():void{
    if(localStorage.getItem(this.localStorage_currentUser)){
      this.userConnect=JSON.parse(localStorage.getItem(this.localStorage_currentUser));
      this.isLoggedIn = true;

    }
    else{
      this.isLoggedIn = false;
      this.userConnect=null;
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/