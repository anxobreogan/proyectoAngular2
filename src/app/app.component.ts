import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.sevice';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  public title: string;
  public user;

  constructor(private _authService: AuthService) {
    this.title = 'proyecto'

  }

  ngOnInit() {


  }





}
