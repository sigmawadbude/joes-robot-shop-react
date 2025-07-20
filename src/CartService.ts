import { BehaviorSubject } from "rxjs";
import type { IProduct } from "./product.model";
import axios from "axios";
class CartService {
  private cart = new BehaviorSubject<IProduct[]>([]);
  cart$ = this.cart.asObservable();

  constructor() {
    axios
      .get<IProduct[]>("/api/cart")
      .then((response) => {
        const data = Array.isArray(response.data)
          ? response.data
          : [response.data];
        this.cart.next(data);
        console.log("Cart initialized with items:", data);
      })
      .catch((err) => {
        console.error("Failed to load cart:", err);
        this.cart.next([]); // fallback to empty cart
      });
  }

 getCartObservable() {
    return this.cart$;
  }

  add(product: IProduct) {
    const currentCart = this.cart.getValue();
    const newCart = [...currentCart, product];
    this.cart.next(newCart);

    axios.post('/api/cart', newCart)
      .then(() => console.log(`Added ${product.name} to cart!`))
      .catch(err => console.error('Failed to update cart:', err));
  }

  remove(product: IProduct) {
    const newCart = this.cart.getValue().filter(item => item !== product);
    this.cart.next(newCart);

    axios.post('/api/cart', newCart)
      .then(() => console.log(`Removed ${product.name} from cart!`))
      .catch(err => console.error('Failed to update cart:', err));
  }
}

export const cartService = new CartService(); // singleton instance
