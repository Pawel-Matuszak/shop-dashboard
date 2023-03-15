import React from "react";
import { Cart } from "../../types";

type Props = {
  cart: Cart;
};

const CartListItem = ({ cart }: Props) => {
  return (
    <div
      className="flex w-full items-center justify-between border-b border-opacity-10 p-4 max-md:flex-col"
      key={cart.id}
    >
      <div className="flex flex-col items-center md:items-start">
        <div>
          Total: <span className="font-bold">${cart.total}</span>
        </div>
        <div>
          Discounted Total:{" "}
          <span className="font-bold text-green-500">${cart.discountedTotal}</span>
        </div>
        <div>
          Quantity:<span className="font-bold"> {cart.totalQuantity}</span>
        </div>
      </div>
      <div className="my-4 flex flex-col items-end max-md:items-center">
        <span className="font-bold">Products:</span>
        {cart.products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div>{product.title}</div>
            <div className="ml-4 font-bold">{product.quantity}x</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartListItem;
