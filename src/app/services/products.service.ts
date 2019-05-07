import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Producto, CestaInterface } from '../models/producto';
import { ProductsListComponent } from '../components/products-list/products-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:8001/api'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.API_URI}/producto/listar`);
  }
  getMyProducts(uuid: string) {
    return this.http.get(`${this.API_URI}/producto/filtrarPorUser/${uuid}`);
  }
  getProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`);
  }
  altaProducto(producto: Producto) {
    return this.http.post(`${this.API_URI}/producto`, producto);
  }
  borrarProdcuto(id: string) {

    return this.http.delete(`${this.API_URI}/producto/borrar/${id}`);

  }

  getCesta() {

    return this.http.get(`${this.API_URI}/producto/cesta/listar`);
  }

  addCesta(idproducto) {

    return this.http.post(`${this.API_URI}/producto/cesta/${idproducto}`, idproducto);

  }
  getProductoId(id: string) {
    return this.http.get(`${this.API_URI}/producto/listarproducto/${id}`);
  }






}
