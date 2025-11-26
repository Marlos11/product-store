import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/Products.interface';
import { CardComponent } from "./components/card/card.component";
import { RouterLink } from "@angular/router";
import { MatAnchor } from "@angular/material/button";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatAnchor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = []
  productsService = inject(ProductsService)
  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products
      console.log(products)
    })
  }
}
