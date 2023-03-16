import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";

type Props = {
  message: string;
  isSuccess: boolean;
};

const Snackbar = ({ message, isSuccess }: Props) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (hide) return <></>;

  return (
    <div
      className={`fixed right-4 bottom-4 flex w-1/4 justify-between rounded px-3 py-2 ${
        isSuccess ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
      <button className="text-xl" onClick={() => setHide(true)}>
        <GrFormClose className="" />
      </button>
    </div>
  );
};

export default Snackbar;
