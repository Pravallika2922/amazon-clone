import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          alt="ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item, index) => (
            <BasketItem
              key={index}
              id={item.id}
              productName={item.productName}
              rating={item.rating}
              productImage={item.productImage}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
