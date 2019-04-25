import { Component } from '@angular/core';
import { AuthService } from './services/auth.sevice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  public title: string;
  public user;

  constructor(private _authService: AuthService) {
    this.title = 'proyecto'

  }

  ngOnInit() {

    /* this.user = this._authService.getUser();
    console.log(this.user); */
  }

}
