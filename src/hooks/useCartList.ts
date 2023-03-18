import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Cart } from "../types";

interface CartList {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}

export default () =>
  useQuery<AxiosResponse<CartList, any>, Error>({
    queryKey: ["cartList"],
    queryFn: async () => await axios.get("https://dummyjson.com/carts"),
  });
