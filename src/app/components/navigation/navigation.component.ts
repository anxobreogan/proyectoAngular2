import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/services/auth.sevice';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'src/app/services/jwt.interceptor';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
  providers: [{

    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,

  }, AuthService]
})
export class NavigationComponent implements OnInit, DoCheck {

  constructor(public authService: AuthService) { }



  public title: string;
  public user;
  public product;




  ngOnInit() {
    /* this.onCheckUser(); */
    this.user = this.authService.getUser();
    console.log(this.user);

  }

  onLogout(): void {
    this.authService.logoutUser();
  }

  ngDoCheck() {
    this.user = this.authService.getUser();
  }

  /* onCheckUser(): void {

    if (this.authService.getCurrentUSer() == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  } */




}
