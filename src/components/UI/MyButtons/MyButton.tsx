import React from "react";

type MyDefaultButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

function MyDefaultButton({ className, children }: MyDefaultButtonProps) {
  return (
    <button
      className={
        "bg-black py-2 px-5 rounded-[30px] cursor-pointer text-white text-sm hover:bg-[#2c2c2c] duration-200" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}

export default MyDefaultButton;
