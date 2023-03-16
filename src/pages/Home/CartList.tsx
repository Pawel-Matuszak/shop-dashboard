import { UseMutationResult } from "@tanstack/react-query";
import React from "react";
import { Cart } from "../../types";
import CartListHeader from "./CartListHeader";
import CartListItem from "./CartListItem";

type Props = {
  cartArray: Cart[];
  removeCart: UseMutationResult<void, unknown, number, unknown>;
};

const CartList = ({ cartArray, removeCart }: Props) => {
  return (
    <div className="mx-auto my-4 flex max-w-screen-lg flex-col ">
      <CartListHeader />
      {cartArray.map((cart: Cart) => (
        <CartListItem cart={cart} removeCart={removeCart} />
      ))}
    </div>
  );
};

export default CartList;
