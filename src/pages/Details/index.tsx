import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  return <div>Details {id}</div>;
};

export default Details;
