import React from "react";
import { Cart } from "../../types";

type Props = {
  cart: Cart;
};

const CartListItem = ({ cart }: Props) => {
  return (
    <div className="flex justify-evenly p-1 w-4/5 mx-auto my-2 flex-wrap border-b-2 border-white border-opacity-10">
      <p className=" line-through">{cart.total}$</p>
      <p className="">{cart.discountedTotal}$</p>
      <p className="">{cart.totalProducts} items</p>
      <div>{">"}</div>
    </div>
  );
};

export default CartListItem;
