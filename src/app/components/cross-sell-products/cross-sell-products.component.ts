import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cross-sell-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: "./cross-sell-products.component.html",
  styleUrl: "./cross-sell-products.component.css"
})
export class CrossSellProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data.products;
    });
  }
}
