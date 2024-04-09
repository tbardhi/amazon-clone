import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="chekoutProduct">
      <img className="chekoutProduct__image" src={image} alt="" />

      <div className="chekoutProduct__info">
        <p className="chekoutProduct__title">{title}</p>

        <p className="chekoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="chekoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>*</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
