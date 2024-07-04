import { useState } from "react";
import ReviewCard from "./ReviewCard";
import { useSelector } from "react-redux";

function MaxQuantity() {
  const useSelectorData = useSelector((state) => state?.items); // Get cart items from Redux store

  const [items, setItems] = useState([]);

  const decreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div>
      {useSelectorData.map((item) => (
        <ReviewCard
          key={item.id}
          id={item.id}
          quantity={item.quantity}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
        />
      ))}
    </div>
  );
}

export default MaxQuantity;
