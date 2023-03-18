import React from "react";

type Props = {
  title: string;
  leadingComponent?: React.ReactNode;
  trailingComponent?: React.ReactNode;
};

const Navbar = ({ title, leadingComponent, trailingComponent }: Props) => {
  return (
    <>
      <section className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {leadingComponent}
          <p className="text-xl font-bold">{title}</p>
        </div>
        {trailingComponent}
      </section>
      <section className="mx-auto my-2 w-11/12 border-t-2 border-gray-300 "></section>
    </>
  );
};

export default Navbar;
