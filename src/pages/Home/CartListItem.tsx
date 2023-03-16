import React from "react";
import { Cart } from "../../types";
import { BsTrash } from "react-icons/bs";
import Button from "../../components/Button";

type Props = {
  cart: Cart;
};

const CartListItem = ({ cart }: Props) => {
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
      <Button action={() => {}}>
        <BsTrash className="text-2xl text-red-600" />
      </Button>
    </div>
  );
};

export default CartListItem;
