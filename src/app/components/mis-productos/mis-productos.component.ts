import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.sass']
})
export class MisProductosComponent implements OnInit {

  public listadoProducto: any = [];

  public refresh;

  public uuid;

  public user;

  constructor(private misProductos: ProductsService) {
    this.uuid = localStorage.getItem('uuid');
  }


  ngOnInit() {

    this.misProductos.getMyProducts(this.uuid).subscribe(
      res => {
        this.listadoProducto = res;
        /* console.log(res); */
      },
      err => console.error(err)
    );
  }

  borrarProducto(idproducto: string) {

    this.misProductos.borrarProdcuto(idproducto).subscribe(
      res => {
        console.log(res);
        window.location.reload();

      },
      err => console.log(err)
    );
  }

  // actualizarProducto(idproducto) {

  //   console.log(idproducto);

  // }

  /*filter() {
    this.listadoProducto.filter(item => item);


  }*/
}
