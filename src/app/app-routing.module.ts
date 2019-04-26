import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormAltaComponent } from './components/form-alta/form-alta.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'

  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {

    path: 'products/alta',
    component: FormAltaComponent,
  },
  {
    path: 'user/register',
    component: RegisterComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'mis-productos',
    component: MisProductosComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
