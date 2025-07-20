import { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import type { IProduct } from "./product.model";
import ProductDetails from "./ProductDetails";
import "./Cart.css";

export default function Cart() {
  const cartService = useCart();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  useEffect(() => {
    const sub = cartService.getCartObservable().subscribe(setCartItems);
    return () => sub.unsubscribe();
  }, [cartService]);
  useEffect(() => {
    // Calculate total whenever cart items change
    const total = cartItems.reduce((prev, next) => {
      const discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.price * discount;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const remove = (product: IProduct) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== product.name));
    //cartService.clearCart();
    cartService.remove(product);
    console.log(`Product removed from cart: ${product.name}`);
  };

  return (
    <>
      <div className="container">
        <h1 className="header">Your Cart</h1>
        {cartItems.length === 0 && (
          <div className="empty-cart" >
            You have no items in your cart
          </div>
        )}
        {cartItems.length > 0 && (
          <ul className="cart" >
            {cartItems.map((product, index) => (
              <li className="product-item" key={index}>
                <div className="product">
                  <ProductDetails product={product} />
                  <div className="price">
                    <div className="{product.discount > 0 ? 'strikethrough' : ''}">${(product.price).toFixed(2)}</div>
                    {product.discount > 0 && <div className="discount">${(product.price * (1 - product.discount)).toFixed(2)}</div>}
                    <button className="cta" onClick={() => remove(product)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="total">Total: {cartTotal}</div>
      </div>
    </>
  );
}