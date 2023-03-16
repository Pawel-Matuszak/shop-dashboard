import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default () =>
  useQuery<any, Error>({
    queryKey: ["cartList"],
    queryFn: async () => await axios.get("https://dummyjson.com/carts"),
  });
