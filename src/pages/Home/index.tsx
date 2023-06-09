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
import useRemoveCartMutation from "../../hooks/useRemoveCartMutation";
import AddCart from "./AddCart";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";

type Props = {};

const Home = (props: Props) => {
  const cartList = useCartList();
  const removeCart = useRemoveCartMutation(() => cartList.refetch());

  if (cartList.isLoading) return <Loading />;
  if (cartList.isError) return <ErrorMessage>{cartList.error.message}</ErrorMessage>;

  return (
    <main className="mx-auto my-4 w-4/5 max-sm:w-screen">
      <Navbar
        leadingComponent={<TiShoppingCart className="text-4xl" />}
        trailingComponent={<AddCart />}
        title="Carts"
      />
      
      <section>
        {cartList.isSuccess && (
          <CartList
            cartArray={cartList.data?.data.carts}
            removeCart={removeCart}
          ></CartList>
        )}
        {removeCart.isSuccess && <Snackbar message="Cart removed!" isSuccess />}
      </section>
    </main>
  );
};

export default Home;
