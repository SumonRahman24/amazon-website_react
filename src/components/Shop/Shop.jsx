import { useState } from "react";
import fakedata from "../../fakeData/products.json";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const first10fakeData = fakedata.slice(0, 10);

  const [products] = useState(first10fakeData);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("clicked", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
