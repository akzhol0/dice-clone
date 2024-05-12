import React, { useState } from "react";
import MyBrandIcon from "../UI/MyIcons/MyBrandIcon";
import MySearchIcon from "../UI/MyIcons/MySeacrchIcon";
import { Link } from "react-router-dom";
import MyBrgrButton from "../UI/MyButtons/MyBrgrButton";
import BurgerMenuHeader from "./BurgerMenuHeader";
import MyModal from "../UI/MyModals/MyModal";
import MyButton from "../UI/MyButtons/MyButton";

function Header() {
  const [burgerToggle, setBurgerToggle] = useState<boolean>(false);
  const [modalToggle, setModalToggle] = useState<boolean>(false);

  return (
    <div className="w-full flex justify-center pt-2 lg:pt-5">
      <div className="w-[90%] sm:w-[98%] lg:w-[95%] flex justify-between items-center">
        <Link to="/">
          <div>
            <MyBrandIcon />
          </div>
        </Link>
        <ul className="hidden md:flex gap-[30px] items-center cursor-pointer">
          <Link
            className="border hover:border-t-black duration-300"
            to="browse-events"
          >
            <li>Browse events</li>
          </Link>
          <Link className="border hover:border-t-black duration-300" to="about">
            <li>About</li>
          </Link>
          <Link
            className="border hover:border-t-black duration-300"
            to="careers"
          >
            <li>Careers</li>
          </Link>
          <Link className="border hover:border-t-black duration-300" to="blog">
            <li>Blog</li>
          </Link>
          <Link
            className="border hover:border-t-black duration-300"
            to="log-in"
          >
            <li>Log In</li>
          </Link>
          <span onClick={() => setModalToggle(true)}>
            <MyButton className="px-2">
              <MySearchIcon color="white" />
            </MyButton>
          </span>
          <Link to="get-the-app">
            <MyButton>GET THE APP</MyButton>
          </Link>
        </ul>
        <MyBrgrButton
          burgerToggle={burgerToggle}
          setBurgerToggle={setBurgerToggle}
        />
        <BurgerMenuHeader setModalToggle={setModalToggle} burgerToggle={burgerToggle} />
      </div>
      {modalToggle && <MyModal setModalToggle={setModalToggle} />}
    </div>
  );
}

export default Header;
