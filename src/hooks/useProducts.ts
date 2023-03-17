import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default () =>
  useQuery<any, Error>({
    queryKey: ["productsList"],
    queryFn: async () => await axios.get("https://dummyjson.com/products"),
  });
