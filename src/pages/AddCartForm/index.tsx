import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import Snackbar from "../../components/Snackbar";
import useAddCartMutation from "../../hooks/useAddCartMutation";
import useProducts from "../../hooks/useProducts";
import { Product, SelectedProducts } from "../../types";
import ProductListItem from "./ProductListItem";

type Props = {};

const AddCartForm = (props: Props) => {
  const navigate = useNavigate();
  const products = useProducts();
  const addCart = useAddCartMutation();
  const [selectedProducts, setSelectedProducts] = useState<SelectedProducts>({});
  const [message, setMessage] = useState("");

  const handleChangeQuantity = (productId: number, value: number) => {
    const qty = (selectedProducts[productId] || 0) + value;
    setSelectedProducts({
      ...selectedProducts,
      [productId]: qty > 0 ? qty : 0,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const cartKeys = Object.keys(selectedProducts);
    const products: any = cartKeys
      .map((key) => {
        return {
          id: key,
          quantity: selectedProducts[parseInt(key)],
        };
      })
      .filter((product: any) => product.quantity > 0);
    if (products.length === 0) return setMessage("Select at least one product");
    addCart.mutate({ userId: 1, products });
  };

  if (products.isError) return <div>Error: {products.error.message}</div>;
  if (products.isLoading) return <Loading />;
  return (
    <div className="mx-auto my-4 w-4/5 max-sm:w-screen">
      <Navbar
        leadingComponent={
          <IoArrowBackOutline
            className="cursor-pointer text-3xl"
            onClick={() => navigate("/shop-dashboard/")}
          />
        }
        title="Select Products"
      />
      <form onSubmit={handleSubmit} className="m-auto w-3/4">
        {products.data?.data.products.map((product: Product) => (
          <ProductListItem
            product={product}
            handleChangeQuantity={handleChangeQuantity}
            selectedProducts={selectedProducts}
          />
        ))}
        <button
          type="submit"
          className="m-6 rounded border border-white px-3 py-1 font-bold transition-colors hover:bg-white hover:text-gray-600"
        >
          Submit
        </button>
        {addCart.isSuccess && <Snackbar message="Cart added!" isSuccess />}
        {addCart.isError && <Snackbar message="Error" isSuccess={false} />}
        {message && <Snackbar message={message} isSuccess={false} />}
      </form>
    </div>
  );
};

export default AddCartForm;
