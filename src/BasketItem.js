import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

const BasketItem = ({ id, productImage, productName, price, rating }) => {
    const [{basket},dispatch]=useStateValue();
const removeFromBasket=()=>{
    dispatch({
        type:"removeFromBasket",
        id:id,
    })
}

  return (
    <div className="basketItem">
      <img src={productImage} alt="basketItem" className="basketItem_image" />
      <div className="basketItem_info">
        <p className="basketItem_title">{productName}</p>
        <p className="basketItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <h6 className="basketItem_rating">
          {Array(rating)
            .fill()
            .map((i) => (
              <p key={i}>🌟</p>
            ))}
        </h6>
        <button className="removeFromBasket" onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
