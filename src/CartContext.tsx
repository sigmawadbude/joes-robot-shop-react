import { createContext, useContext } from "react";
import { cartService } from "./CartService";

export const CartContext = createContext(cartService);

export const useCart = () => useContext(CartContext);
