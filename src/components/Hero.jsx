import React from "react";
import Button from "./Button";

// import {} from "../assets/images/tubes.mp4";

function Hero() {
  return (
    <div className=" lg:bg-black text-white flex pl-[90px] gap-[108px] rounded-4xl mb-[34px] h-[492px]   ">
      <div className=" mt-[60px] max-w-[545px] ">
        <h2 className=" text-6xl  font-extrabold mb-2.5 leading-[76px] ">
          Eng Ishonchli Hosting Xizmati!
        </h2>
        <p className=" text-[18px]  font-[Inter] font-medium mb-20 leading-[22px]">
          Tezlik, xavfsizlik va uzluksiz ish faoliyati bilan mukammal xizmatni
          tanlang!
        </p>
        <span className="flex  gap-2.5 max-w-[404px]">
          <Button
            text={"Bog‘lanish"}
            className={
              "raspberryRed text-white text-[20px] py-5 px-[30px] font-semibold max-w-40"
            }
          />
          <Button
            text={" Ko'proq ma'lumot"}
            className="font-semibold text-[20px] py-5 px-[30px] border-1 gray10"
          />
        </span>
      </div>
      <video
        autoPlay
        loop
        muted
        className="object-cover bg-cover  h-screen absolute -z-10 opacity-100 blur-[4px]"
        width={434}
        height={468}
        src="/videos/tubes.mp4"
      ></video>
    </div>
  );
}

export default Hero;
