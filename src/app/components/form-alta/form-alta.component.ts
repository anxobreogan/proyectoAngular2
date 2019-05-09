import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    descripcioncompleta: '',
    uuid: localStorage.getItem('uuid'),
    idlocalizacion: ''
  };

  edit: boolean = false;
  constructor(private productsservice: ProductsService, private router: Router, private acitvatedRoute: ActivatedRoute) { }
  ngOnInit() {
    const params = this.acitvatedRoute.snapshot.params;
    console.log(params);
    if (params.idproducto) {
      // console.log(params.idproducto);
      this.productsservice.getProductoId(params.idproducto).subscribe(
        res => {
          console.log(res[0]);
          this.producto = res[0];
          this.edit = true;
        },
        err => console.log(err)
      )
    }

  }
  anadirProducto() {
    this.productsservice.altaProducto(this.producto).subscribe()
    console.log(this.producto);
  };
  actualizarProducto() {
    console.log(this.producto);
  }
}
