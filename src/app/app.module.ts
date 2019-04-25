import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormAltaComponent } from './components/form-alta/form-alta.component';
import { ProductsListComponent } from './components/products-list/products-list.component';


import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.sevice';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormAltaComponent,
    ProductsListComponent,

    RegisterComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
