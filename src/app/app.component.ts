import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface product {
  productName: string | null;
  productPrice: number | null;
  isAvailable: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  product: product = {
    productName: '',
    productPrice: null,
    isAvailable: false,
  };
  editIndex: number | null = null;
  products: product[] = [];

  submitProducts() {
    if (this.editIndex !== null) {
      this.products[this.editIndex] = { ...this.product };
      this.editIndex = null;
    } else {
      this.products.push(this.product);
    }
    this.product = {
      productName: '',
      productPrice: null,
      isAvailable: false,
    };
  }
  editProducts(index: number) {
    this.product = { ...this.products[index] };
    this.editIndex = index;
  }
  deleteProduct(index: number) {
    this.products.splice(index, 1);
    if (this.editIndex === index) {
      this.product = {
        productName: '',
        productPrice: null,
        isAvailable: false,
      };
      this.editIndex = null;
    }
  }
}
