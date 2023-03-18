import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Cart } from "../types";

export default (id: string) =>
  useQuery<AxiosResponse<Cart, any>, Error>({
    queryKey: ["cartList"],
    queryFn: async () => await axios.get(`https://dummyjson.com/carts/${id}`),
  });
