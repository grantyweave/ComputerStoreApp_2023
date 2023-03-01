import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRepositoryService {

  inventory: IProduct[] = [
    { productId: "1", name: "Monitor Arm", price: 89 },
    { productId: "2", name: "USB Docking Station", price: 220 },
    { productId: "3", name: "Ergonomic Mouse", price: 101 },
    { productId: "4", name: "Wrist Rest", price: 35 },
    { productId: "5", name: "Ergonomic Keyboard", price: 229 },

  ]
  constructor() { }

  getProducts(): IProduct[] {
    return this.inventory
  }
}
