import React from "react";
import { Cart } from "../../types";
import CartListHeader from "./CartListHeader";
import CartListItem from "./CartListItem";

type Props = {
  cartArray: Cart[];
};

const CartList = ({ cartArray }: Props) => {
  return (
    <div className="mx-auto my-4 flex max-w-screen-lg flex-col ">
      <CartListHeader />
      {cartArray.map((cart: Cart) => (
        <CartListItem cart={cart} />
      ))}
    </div>
  );
};

export default CartList;
