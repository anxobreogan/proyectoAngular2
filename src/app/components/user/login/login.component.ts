import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.sevice';
import { UserInterface } from 'src/app/models/user-interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }



  public user: UserInterface = {
    email: '',
    password: '',
  }




  ngOnInit() {
  }
  onLogin() {
    return this.authService
      .loginUser(this.user.email, this.user.password).subscribe(
        data => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.email));
          localStorage.setItem('accessToken', data.accessToken);
          /* console.log(data); */
          /* let token = "JWT " + data.accessToken;
          localStorage.setItem('auth', token);
          localStorage.setItem('currentUser', JSON.stringify(data.email)); */
          /* console.log(data.uuid); */
          /* let item2 = localStorage.getItem('currentUser'); */
          /* console.log(item2); */
        },
        error => console.log(error)

        //TODO:mirar el set token...aqui declarándolo va.
      );

  }



}
