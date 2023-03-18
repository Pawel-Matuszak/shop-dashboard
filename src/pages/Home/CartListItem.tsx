import React from "react";
import { Cart } from "../../types";
import { BsTrash } from "react-icons/bs";
import Button from "../../components/Button";
import useRemoveCartMutation from "../../hooks/useRemoveCartMutation";
import Snackbar from "../../components/Snackbar";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

type Props = {
  cart: Cart;
  removeCart: UseMutationResult<AxiosResponse<any, any>, unknown, number, unknown>;
};

const CartListItem = ({ cart, removeCart }: Props) => {
  const handleRemoveCart = () => {
    removeCart.mutate(cart.id);
  };

  return (
    <div className="cart-list" key={cart.id}>
      <div>${cart.total}</div>
      <div>
        <span className="font-bold text-green-500">${cart.discountedTotal}</span>
      </div>
      <div>{cart.totalQuantity}</div>
      <div className="flex flex-col max-sm:hidden">
        {cart.products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div className="mr-4 font-bold">{product.quantity}x</div>
            <div className="">{product.title}</div>
          </div>
        ))}
      </div>
      <Button action={handleRemoveCart}>
        <BsTrash className="text-2xl text-red-600" />
      </Button>
    </div>
  );
};

export default CartListItem;
