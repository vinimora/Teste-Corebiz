import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  mainInstallments: any;
  parseMoney = (vl : any) => vl.toLocaleString('pt-br', {minimumFractionDigits: 2});
  constructor() { }

  ngOnInit(): void {
    this.mainInstallments = this.product.installments[0] || null;
  }
  @Input()  product :any ;
}
