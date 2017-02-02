import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

constructor(private http: Http) { }
 
 
 private Url = 'http://localhost:51098/login';
 
 

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;




  login(): Observable<boolean> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

   
  var user = {
          username:'jdesande',
          password : 'jasjas'
        };
    return this.http
               .post(this.Url,JSON.stringify(user),options)
               .map(response => this.isLoggedIn = true);
    
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/