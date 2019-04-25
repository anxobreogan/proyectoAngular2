import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  listadoProducto: any = [];

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
}
