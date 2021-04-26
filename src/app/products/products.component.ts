import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService :ProductsService,
  ) { }
  products : any = [];
loadingProducts =false;
  ngOnInit(): void {
    if (!this.loadingProducts) {
        this.loadingProducts = true;
      this.productsService.getProducts().then(p => {
        this.products = p;


  });
}
  }

}
