import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.sevice';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }



  public user: UserInterface = {
    email: '',
    password: '',
  }




  ngOnInit() {
    /*this.user = this.authService.getUser();*/
  }
  onLogin() {
    return this.authService
      .loginUser(this.user.email, this.user.password).subscribe(
        data => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.email));
          localStorage.setItem('accessToken', (data.accessToken));
          let prueba = localStorage.setItem('uuid', (data.uuid));
          /*console.log(prueba);*/
          /* console.log(this.authService.getToken()) */;
          /* console.log(data); */
          /* let token = "JWT " + data.accessToken;
          localStorage.setItem('auth', token);
          localStorage.setItem('currentUser', JSON.stringify(data.email)); */
          /* console.log(data.uuid); */
          /* let item2 = localStorage.getItem('currentUser'); */
          /* console.log(item2); */
          window.location.replace("http://localhost:4200/products");


        },

        error => console.log(error)

        //TODO:mirar el set token...aqui declarándolo va.
      );






  }

  /*goMisProductos() {

    this.router.navigate(['/products']);
  }*/






}
