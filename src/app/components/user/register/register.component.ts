import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.sevice';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  public user: UserInterface = {
    nombre: '',
    email: '',
    password: '',
    uuid: ''
  }

  ngOnInit() {
  }
  onRegister(): void {
    this.authService.registerUser(this.user.email, this.user.password).subscribe(user => {
      this.authService.setUser(user);
      console.log(user);



      /* console.log('correo enviado a tu centa de activacion'); */
    });
  }

}
