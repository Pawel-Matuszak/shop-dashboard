import React from "react";

type Props = {};

const CartListHeader = (props: Props) => {
  return (
    <div className="cart-list">
      <div>Total</div>
      <div>Discounted Total</div>
      <div>Total Quantity</div>
      <div className="max-sm:hidden">Products</div>
    </div>
  );
};

export default CartListHeader;
