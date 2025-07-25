import { BehaviorSubject } from "rxjs";
import type { IProduct } from "./product.model";
import axios from "axios";
import type { IUser } from "./user.model";
class CartService {
  private cart = new BehaviorSubject<IProduct[]>([]);
  cart$ = this.cart.asObservable();

  private user = new BehaviorSubject<IUser | null>(null);
  user$ = this.user.asObservable();

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

    axios
      .post("/api/cart", newCart)
      .then(() => console.log(`Added ${product.name} to cart!`))
      .catch((err) => console.error("Failed to update cart:", err));
  }

  remove(product: IProduct) {
    const newCart = this.cart.getValue().filter((item) => item !== product);
    this.cart.next(newCart);

    axios
      .post("/api/cart", newCart)
      .then(() => console.log(`Removed ${product.name} from cart!`))
      .catch((err) => console.error("Failed to update cart:", err));
  }

  signIn(user: IUser) {
    this.user.next(user);
    console.log(`User signed in: ${user.email}`);
  }

  signOut() {
    this.user.next(null);
  }
}

export const cartService = new CartService(); // singleton instance
