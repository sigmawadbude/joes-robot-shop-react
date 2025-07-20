import type { IProduct } from "./product.model";
import axios from "axios";
class CartService {
  private cart: IProduct[] = [];

  addToCart(product: IProduct): void {
    this.cart.push(product);
    axios.post('/api/cart', product)
      .then(response => {
        console.log("Product added to cart:", response.data);
      })
      .catch(error => {
        console.error("Error adding product to cart:", error);
      });
    console.log("Cart:", this.cart);
  }

  getCart(): IProduct[] {
    return [...this.cart];
  }

  clearCart(): void {
    this.cart = [];
  }
}

export const cartService = new CartService(); // singleton instance
