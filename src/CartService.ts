import type { IProduct } from "./product.model";

class CartService {
  private cart: IProduct[] = [];

  addToCart(product: IProduct): void {
    this.cart.push(product);
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
