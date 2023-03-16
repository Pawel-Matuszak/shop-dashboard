import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import axios from "axios";
import { Cart } from "../../types";
import { TiShoppingCart } from "react-icons/ti";
import CartListItem from "./CartListItem";
import CartList from "./CartList";
import ErrorMessage from "../../components/ErrorMessage";
import useCartList from "../../hooks/useCartList";
import Button from "../../components/Button";
import Snackbar from "../../components/Snackbar";
import useAddCartMutation from "../../hooks/useAddCartMutation";

type Props = {};

const Home = (props: Props) => {
  const cartList = useCartList();
  const addCart = useAddCartMutation();

  if (cartList.isLoading) return <div>Loading...</div>;
  if (cartList.isError) return <ErrorMessage>{cartList.error.message}</ErrorMessage>;

  return (
    <main className="mx-auto my-4 w-4/5 max-sm:w-screen">
      <section className="flex items-center gap-3">
        <TiShoppingCart className="text-4xl" />
        <p className="text-xl font-bold">Carts</p>
        <Button
          action={() => addCart.mutate({ userId: 1, products: [{ id: 1, quantity: 2 }] })}
        >
          <p className="text-xl font-bold">Add Cart</p>
        </Button>
      </section>
      <section className="mx-auto my-2 w-11/12 border-t-2 border-gray-300 "></section>
      <section>
        {cartList.isSuccess && (
          <CartList cartArray={cartList.data?.data.carts}></CartList>
        )}
        {addCart.isSuccess && <Snackbar message="Cart added!" isSuccess />}
        {addCart.isError && <Snackbar message="Error" isSuccess={false} />}
      </section>
    </main>
  );
};

export default Home;
