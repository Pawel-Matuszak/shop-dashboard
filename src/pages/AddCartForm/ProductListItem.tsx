import React from "react";
import { Product, SelectedProducts } from "../../types";

type Props = {
  product: Product;
  handleChangeQuantity: (productId: number, value: number) => void;
  selectedProducts: SelectedProducts;
};

const ProductListItem = ({ product, handleChangeQuantity, selectedProducts }: Props) => {
  const btnStyle =
    "mx-2  flex h-6 w-6 text-xl cursor-pointer items-center justify-center rounded-sm bg-slate-400 font-bold text-slate-700 hover:bg-slate-500";
  return (
    <div key={product.id} className="cart-list grid-cols-4">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p className="text-center font-bold">${product.price}</p>
      <div className="flex items-center">
        <div onClick={() => handleChangeQuantity(product.id, -1)} className={btnStyle}>
          -
        </div>
        <span className="text-l font-bold">{selectedProducts[product.id] || 0}</span>
        <div onClick={() => handleChangeQuantity(product.id, 1)} className={btnStyle}>
          +
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
