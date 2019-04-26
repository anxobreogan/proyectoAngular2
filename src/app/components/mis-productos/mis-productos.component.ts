import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.sass']
})
export class MisProductosComponent implements OnInit {

  public listadoProducto: any = [];

  public refresh;

  constructor(private misProductos: ProductsService) { }






  ngOnInit() {

    this.misProductos.getProducts().subscribe(
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

      },



      err => console.log(err)
    );



  }





}
