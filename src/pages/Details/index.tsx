import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCartDetails from "../../hooks/useCartDetails";

type Props = {};

const Details = (props: Props) => {
  const { id } = useParams();
  const details = useCartDetails(id!);

  useEffect(() => {
    // console.log(details.data.data);
  }, [details.status]);

  if (details.isError) return <div>Error: {details.error.message}</div>;
  if (details.isLoading) return <div>Loading...</div>;

  if (details.isSuccess) return <div>Details {details.data.data.discountedTotal}</div>;
};

export default Details;
