import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { CestaInterface } from '../../models/producto';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  public listadoProducto: any = [];

  public producto;


  constructor(private productsService: ProductsService) {


  }

  ngOnInit() {

    this.productsService.getProducts().subscribe(
      res => {
        this.listadoProducto = res;
      },
      err => console.error(err)
    );
  }

  addCesta() {



    this.productsService.addCesta(this.listadoProducto.idproducto).subscribe();
    console.log(this.listadoProducto.idproducto);



  }




}
