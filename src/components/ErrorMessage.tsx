import React from "react";

type Props = {
  children: React.ReactNode;
};

const ErrorMessage = ({ children }: Props) => {
  return (
    <div className="m-8 mx-auto w-screen text-center text-lg">Error: {children}</div>
  );
};

export default ErrorMessage;
