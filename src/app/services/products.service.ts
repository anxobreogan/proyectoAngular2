import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI = 'http://localhost:8001/api'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.API_URI}/producto/listar`);
  }
  getProduct(id: string) {
    return this.http.get(`${this.API_URI}/products/${id}`);
  }
  altaProducto(producto: Producto) {
    return this.http.post(`${this.API_URI}/producto`, producto);
  }
  bajaProdcuto(id: string) {

    return this.http.delete(`${this.API_URI}/products/${id}`);

  }




}
