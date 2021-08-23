import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id:1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'new'
    },
    {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    },
    {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    },
    {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    },
    {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }
  ];
  constructor() { }
  getAll(){
    return this.products;
  }
  saveProduct(product:any){
    this.products.push(product);
  }
  findByIndex(index:number){
    return this.products[index];
  }
  updateProduct(index:number,data: Product){
    this.products[index] = data;
  }
}
