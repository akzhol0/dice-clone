import React from "react";
import MySearchBar from "../MyIcons/MySeacrchIcon";
import MyCloseButton from "../MyButtons/MyCloseButton";

type MyModalProps = {
  setModalToggle: (arg0: boolean) => void;
};

function MyModal({ setModalToggle }: MyModalProps) {
  return (
    <div className="w-full h-screen flex justify-center bg-black absolute top-0 opacity-80">
      <div className="relative">
        <span className="absolute left-2 top-[108px]">
          <MySearchBar color="black" />
        </span>
        <input
          className="w-[300px] md:w-[600px] h-[40px] rounded-[100px] mt-[100px] ps-[40px] anim"
          type="text"
          placeholder="Find events here"
        />
        <span onClick={() => setModalToggle(false)} className="absolute right-2 top-[106px] cursor-pointer">
          <MyCloseButton />
        </span>
      </div>
    </div>
  );
}

export default MyModal;
