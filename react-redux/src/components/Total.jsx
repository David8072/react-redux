import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalAmount = useSelector((state) => state.totalAmount);

  return (
    <div className="total">
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Amount: ${totalAmount}</h2>
    </div>
  );
};

export default Total;
