import { Component, OnInit } from '@angular/core';
import { CestaInterface } from '../../models/producto';
import { ProductsService } from 'src/app/services/products.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.sass']
})
export class CestaComponent implements OnInit {




  constructor(private productService: ProductsService, private router: Router) { }

  public cestas: CestaInterface;

  ngOnInit() {

    this.verCesta();

  }

  verCesta() {
    this.productService.getCesta()
      .subscribe((cestas: CestaInterface) => (this.cestas = cestas));

    this.router.navigate(['/cesta']);
  }



}
