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
 
 public userConnect : User =null;

 isLoggedIn:boolean = false;


  // store the URL so we can redirect after logging in
  redirectUrl: string;


constructor(private http: Http) {
 }

 SetEntornoUser(){
    if(this.userConnect)
    {
       this.isLoggedIn = true;
      
    }
    else{
       this.isLoggedIn = false;
      
    }
  
 } 

  login(): Observable<boolean> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
  var user = {
          username:'aaranzue',
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
                   
                    this.userConnect  =new User(
                      response.json().Security.user.id,
                      response.json().Security.user.username,
                      response.json().Security.user.Nombre,
                      response.json().Security.user.IdRol,
                      
                      response.json().Security.expires,
                      response.json().Security.token
                    );
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(this.userConnect));

                    this.SetEntornoUser();
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                   
                    return false;
                    
                }
            });
              
    
  }

 

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.localStorage_currentUser);
    this.userConnect=null;
     this.SetEntornoUser();
  }

  reload():void{
    if(localStorage.getItem(this.localStorage_currentUser)){
      this.userConnect=JSON.parse(localStorage.getItem(this.localStorage_currentUser));
    }
    else{
      this.userConnect=null;
    }
    this.SetEntornoUser();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/