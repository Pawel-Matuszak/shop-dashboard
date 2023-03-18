import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default (onSuccessHandler: () => void) =>
  useMutation({
    mutationFn: async (cartId: number) =>
      await axios.delete(`https://dummyjson.com/carts/${cartId}`),
    onSuccess() {
      onSuccessHandler();
    },
  });
