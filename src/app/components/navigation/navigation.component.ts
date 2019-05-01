import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.sevice';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/services/jwt.interceptor';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  providers: [AuthService]
})

export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService) { }



  public title: string;
  public user;
  public product;




  ngOnInit() {

    this.user = this.authService.getUser();


  }

  onLogout(): void {
    this.authService.logoutUser();
  }










}
