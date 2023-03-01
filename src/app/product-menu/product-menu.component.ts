import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductRepositoryService } from '../product-repository.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent {

  allProducts: IProduct[] = [];
  hello: string = "hello";

  constructor(private productRepo: ProductRepositoryService) { }

  ngOnInit(): void {
    this.allProducts = this.productRepo.getProducts();
  }
}
