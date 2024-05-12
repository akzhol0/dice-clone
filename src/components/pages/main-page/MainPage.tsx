import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/MyButtons/MyButton";

function MainPage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-[20px] md:px-[50px] my-5">
        <div className="w-full h-[600px] md:h-[800px] flex justify-center rounded-lg">
          <img
            className="object-cover rounded-lg"
            src="/images/bgbgbg.png"
            alt="bg-photo"
            width={600}
            height={800}
          />
        </div>
        <div className="w-full flex flex-col gap-[30px] justify-end">
          <h1
            className="text-[40px] lg:text-[100px] font-extrabold leading-[50px] 
              md:leading-[60px] lg:leading-[90px] tracking-[-2px] md:tracking-[-4px]">
            FIND MORE OF <br /> THE EVENTS <br /> YOU LOVE
          </h1>
          <p className="text[20px] lg:text-[20px]">
            Incredible live shows. Upfront pricing. Relevant recommendations.
            <br /> We make going out easy.
          </p>
          <Link to="get-the-app">
            <MyButton>GET THE APP</MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
