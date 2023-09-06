import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity,decreaseQuantity } from "../actions/ProductActions";

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
  
    return (
      <div>
        <h1>Product List</h1>
        {products.map((product) => (
          <div key={product.name}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(product.name))}>
              Increase Quantity
            </button><br />
            <button onClick={() => dispatch(decreaseQuantity(product.name))}>
              Decrease Quantity
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
