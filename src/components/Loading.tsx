import React from "react";
import ReactLoading from "react-loading";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="m-auto mt-4 flex h-screen w-screen items-center justify-center">
      <ReactLoading type="spin" color="#FFC145" height={"100px"} width={"100px"} />
    </div>
  );
};

export default Loading;
