import { Injectable } from '@angular/core';
const apiCorebiz = 'https://corebiz-test.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
 getProducts(){
  const products = fetch(`${apiCorebiz}/products`).then(r => r.json());
  return products;
};

}
