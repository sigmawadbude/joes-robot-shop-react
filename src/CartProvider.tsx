import { CartContext } from "./CartContext";
import { cartService } from "./CartService";

export const CartProvider = ({ children }: { children: React.ReactNode }) => (
  <CartContext.Provider value={cartService}>
    {children}
  </CartContext.Provider>
);
