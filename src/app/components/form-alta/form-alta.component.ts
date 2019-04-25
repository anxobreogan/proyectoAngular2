import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.sass']
})
export class FormAltaComponent implements OnInit {

  producto: Producto = {


    producto: '',
    precio: '',
    descripcioncorta: '',
    descripcioncompleta: ''



  };

  constructor(private productsservice: ProductsService) { }

  ngOnInit() {
  }

  anadirProducto() {

    /* delete this.producto.idproducto; */

    this.productsservice.altaProducto(this.producto).subscribe()
  };

}
