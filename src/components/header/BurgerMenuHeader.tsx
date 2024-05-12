import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButtons/MyButton";
import MySearchBar from "../UI/MyIcons/MySeacrchIcon";

type BurgerMenuHeaderProps = {
  burgerToggle: boolean;
  setModalToggle: (arg0: boolean) => void;
};

function BurgerMenuHeader({ burgerToggle, setModalToggle }: BurgerMenuHeaderProps) {
  return (
    <div
      className={
        burgerToggle
          ? "w-[350px] h-screen top-[55px] right-[0] flex md:hidden absolute bg-[#1b1b1b] duration-300"
          : "w-[350px] h-screen top-[55px] right-[-450px] flex md:hidden absolute bg-[#1b1b1b] duration-300"
      }
    >
      <div className="w-full">
        <ul className="flex flex-col gap-2 items-center cursor-pointer text-white">
          <Link className="my-2" to="browse-events">
            <li>Browse events</li>
          </Link>
          <Link className="my-2" to="about">
            <li>About</li>
          </Link>
          <Link className="my-2" to="careers">
            <li>Careers</li>
          </Link>
          <Link className="my-2" to="blog">
            <li>Blog</li>
          </Link>
          <Link className="my-2" to="log-in">
            <li>Log In</li>
          </Link>
          <span onClick={() => setModalToggle(true)}>
            <MyButton className="px-2">
              <MySearchBar color="white" />
            </MyButton>
          </span>
          <Link className="my-2" to="get-the-app">
            <MyButton className="bg-white text-black hover:bg-[#c5c5c5]">GET THE APP</MyButton>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenuHeader;
