import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = (props) => {
    const {id,productImage,productName,rating,price}=props;
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
      dispatch({
        type:"addToBasket",
        item:{
          id,
          productName,
          productImage,
          price,
          rating
        }
      })
    }
  
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_title">{productName}</p>
        <p className="product_price">
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating).fill().map((i)=>(<p key={i}>🌟</p>)
                
            )}
          
        </div>
      </div>
      <img
        src={productImage}
        alt="product"
      />
      <button className="addToBasket" onClick={addToBasket}>Add to Basket </button>
    </div>
  );
};

export default Product;
