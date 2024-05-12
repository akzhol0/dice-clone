import React from "react";

type MyBrgrButtonProps = {
  setBurgerToggle: (arg0: boolean) => void;
  burgerToggle: boolean;
};

function MyBrgrButton({ setBurgerToggle, burgerToggle }: MyBrgrButtonProps) {
  return (
    <span
      onClick={() => setBurgerToggle(burgerToggle ? false : true)}
      className="w-[25px] h-[25px] flex md:hidden flex-col justify-between cursor-pointer"
    >
      {burgerToggle ? (
        <>
          <span className="w-full h-[40px] bg-black rotate-45 mt-[12px] duration-300"></span>
          <span className="w-full h-[40px] bg-black -rotate-45 mb-[12px] duration-300"></span>
        </>
      ) : (
        <>
          <span className="w-full h-[3px] bg-black duration-300"></span>
          <span className="w-full h-[3px] bg-black duration-300"></span>
          <span className="w-full h-[3px] bg-black duration-300"></span>
        </>
      )}
    </span>
  );
}

export default MyBrgrButton;
