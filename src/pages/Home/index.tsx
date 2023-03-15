import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import axios from "axios";
import { Cart } from "../../types";
import { TiShoppingCart } from "react-icons/ti";
import CartListItem from "./CartListItem";

type Props = {};

const Home = (props: Props) => {
  const cartList = useQuery({
    queryKey: ["cartList"],
    queryFn: async () => await axios.get("https://dummyjson.com/carts"),
  });

  useEffect(() => {
    console.log(cartList.data?.data.carts);
  }, [cartList.status]);

  return (
    <main className="w-4/5 mx-auto my-4">
      <section className="flex items-center gap-3">
        <TiShoppingCart className="text-4xl" />
        <p className="font-bold text-xl">Carts</p>
      </section>
      <section className="w-11/12 mx-auto my-2 border-t-2 border-gray-300"></section>
      <section className="flex justify-evenly w-4/5 mx-auto my-2 flex-wrap">
        <p className="font-bold">Total</p>
        <p className="font-bold">Discounted Total</p>
        <p className="font-bold">Total Products</p>
        <p className="font-bold">Details</p>
      </section>
      <section>
        {cartList.data?.data.carts.map((cart: Cart) => CartListItem({ cart }))}
      </section>
    </main>
  );
};

export default Home;
