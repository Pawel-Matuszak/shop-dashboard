import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { PostCartData } from "../types";

export default (onSuccessHandler?: () => void) =>
  useMutation({
    mutationFn: async (cart: PostCartData) =>
      await axios.post("https://dummyjson.com/carts/add", cart),
    onSuccess() {
      if (onSuccessHandler) onSuccessHandler();
    },
  });
