import { UseMutationResult } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { PostCartData } from "../../types";
import { GoPlus } from "react-icons/go";

type Props = {};

const AddCart = ({}: Props) => {
  const navigate = useNavigate();

  const addHandler = () => {
    // addCart.mutate({ userId: 1, products: [{ id: 1, quantity: 2 }] });
    navigate("/add-cart");
  };

  return (
    <Button action={() => addHandler()}>
      <GoPlus className="text-2xl text-green-500" />
    </Button>
  );
};

export default AddCart;
