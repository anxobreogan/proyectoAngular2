import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';
import { LoginRequest, LoginResponse, UserInterface } from '../models/user-interface';

import { isNullOrUndefined } from 'util';





@Injectable({
  providedIn: "root"

})

export class AuthService {
  public currentUser;
  public user;
  public token;

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  registerUser(email: string, password: string) {

    //TODO: Poner la direccion de register.
    const url_api = 'http://localhost:8001/api/account';
    return this.http.post(url_api, { email: email, password: password }, {
      headers: this.headers
    }).pipe(map(data => data));

  }

  loginUser(email: string, password: string): Observable<any> {
    const url_api = 'http://localhost:8001/api/account/login';
    return this.http.post(url_api, { email, password }, { headers: this.headers }).pipe(map(data => data));
  }

  /* loginUser({ email, password }: LoginRequest) {
    const url_api = 'http://localhost:8001/api/account/login';
    return this.http.post<LoginResponse>(url_api, { email, password }, { headers: this.headers }).pipe(map(user => {
      if (user && user.accessToken) {
        const { accessToken, refreshToken } = user;
        localStorage.setItem('auth', JSON.stringify({
          accessToken, refreshToken
        })

        );
      }
      return user;
    }))
  } */



  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  /*setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUSer() {

    let currentUser = JSON.parse(localStorage.getItem('currentUSer'));


    if (currentUser != 'undefined') {
      this.currentUser = currentUser;
    } else {
      this.currentUser = null;
    }
    return this.currentUser;
  } */

  getUser() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user != 'undefined') {
      this.user = user;
    } else {
      this.user = null;
    }

    return this.user;
  }
  getToken() {

    let token = JSON.parse(localStorage.getItem('accesToken'));

    if (token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }

  getProducts(token) {

    const url_api = 'http://localhost:8001/api/productos/listar';
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Authorization', token);
    return this.http.get(url_api, { headers: headers });


  }


  logoutUser() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  }
}