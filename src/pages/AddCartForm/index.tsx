import React, { useState, useEffect } from "react";
import Snackbar from "../../components/Snackbar";
import useAddCartMutation from "../../hooks/useAddCartMutation";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../types";

type Props = {};

interface SelectedProducts {
  [key: number]: number;
}

const AddCartForm = (props: Props) => {
  const products = useProducts();
  const addCart = useAddCartMutation();
  const [cart, setCart] = useState<SelectedProducts>({});

  const handleIncreaseQuantity = (productId: number) => {
    setCart({
      ...cart,
      [productId]: (cart[productId] || 0) + 1,
    });
  };

  const handleDecreaseQuantity = (productId: number) => {
    setCart({
      ...cart,
      [productId]: cart[productId] > 0 ? (cart[productId] || 0) - 1 : 0,
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    const cartKeys = Object.keys(cart);
    const products: any = cartKeys.map((key) => {
      return {
        id: key,
        quantity: cart[parseInt(key)],
      };
    });
    console.log(products);
    addCart.mutate({ userId: 1, products });
  };

  if (products.isError) return <div>Error: {products.error.message}</div>;
  if (products.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Wybierz produkty</h2>
      <form onSubmit={handleSubmit}>
        {products.data?.data.products.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>
              Quantity:{" "}
              <button type="button" onClick={() => handleDecreaseQuantity(product.id)}>
                -
              </button>
              {cart[product.id] || 0}
              <button type="button" onClick={() => handleIncreaseQuantity(product.id)}>
                +
              </button>
            </p>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {addCart.isSuccess && <Snackbar message="Cart added!" isSuccess />}
      {addCart.isError && <Snackbar message="Error" isSuccess={false} />}
    </div>
  );
};

export default AddCartForm;
