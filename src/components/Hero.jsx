import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className=" bg-black text-white flex py-3 pl-[90px] gap-[108px] rounded-4xl mb-[34px] ">
      <div className=" mt-[60px] max-w-[545px] ">
        <h2 className=" text-6xl  font-extrabold mb-2.5 ">
          Eng Ishonchli Hosting Xizmati!
        </h2>
        <p className=" text-[18px] font-medium font-[Inter] mb-20">
          Tezlik, xavfsizlik va uzluksiz ish faoliyati bilan mukammal xizmatni
          tanlang!
        </p>
        <span className=" flex gap-2.5 h-16 max-w-96 w-full">
          <Button
            text={"Bog‘lanish"}
            className={"raspberryRed text-white text-[20px] py-5 px-[30px] font-semibold "}
          />
          <button className="btn btn-outline rounded-3xl font-[Inter] font-semibold h-full text-[20px] py-5 px-[30px] ">
            Ko'proq ma'lumot
          </button>
        </span>
      </div>
      <img src="/Hero-img.png" alt="" width={434} height={468} />
    </div>
  );
}

export default Hero;
