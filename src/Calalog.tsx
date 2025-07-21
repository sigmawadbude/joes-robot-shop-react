import type { IProduct } from "./product.model";
import "./Calalog.css";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useCart } from "./CartContext";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function Catalog() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string>('');
  const cartService = useCart();
  const location = useLocation();
    

  // Read query param
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const category = query.get('filter') || '';
    setFilter(category);
  }, [location.search]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<IProduct[]>('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = filter === ''
    ? products
    : products.filter((product) => product.category.toLowerCase() === filter.toLowerCase());

  const onNotify = (product: IProduct) => {
    cartService.add(product);
    console.log(`Product added to cart: ${product.name}`);
  }
  return (
    <>
      <div className="container">
        <div className="filters">
          <Link className="button" to="/catalog?filter=heads">Heads</Link>
          <Link className="button" to="/catalog?filter=arms">Arms</Link>
          <Link className="button" to="/catalog?filter=torsos">Torsos</Link>
          <Link className="button" to="/catalog?filter=bases">Bases</Link>
          <Link className="button" to="/catalog?filter=">All</Link>
        </div>

        <ul className="products">
          {filteredProducts.map((product, index) => (
            <li className="product-item" key={index}>
              {/* <ProductDetails product={product} onNotify={() => handleNotify(product) } /> */}
              <div className="product">
                <ProductDetails product={product} />
                <div className="price">
                  <div className="{product.discount > 0 ? 'strikethrough' : ''}">${(product.price).toFixed(2)}</div>
                  {product.discount > 0 && <div className="discount">${(product.price * (1 - product.discount)).toFixed(2)}</div>}
                  <button className="cta" onClick={() => onNotify(product)}>Buy</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}