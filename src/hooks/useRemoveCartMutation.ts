import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default () =>
  useMutation({
    mutationFn: async (cartId: number) => {
      await axios.delete(`https://dummyjson.com/carts/${cartId}`);
    },
  });
