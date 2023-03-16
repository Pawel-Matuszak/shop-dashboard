import React from "react";

type Props = {
  action: () => void;
  children: React.ReactNode;
};

const Button = ({ children, action }: Props) => {
  return (
    <button
      type="submit"
      className="flex cursor-pointer items-center justify-center rounded-md  py-2 transition duration-300 ease-in-out hover:scale-110"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
