import React from "react";
import Button from "./Button";


function Hero() {
  return (
    <div className=" md:bg-black text-white flex  rounded-[40px] mb-[34px] relative  ">
      <div className="lg:mt-[60px] lg:max-w-[545px]  lg:pl-[80px]  pt-[73px] pb-[90px] lg:pb-[69px] text-center md:text-start md:pl-4 md:max-w-[350px]">
        <h2 className=" lg:text-6xl  lg:font-extrabold lg:mb-2.5 lg:leading-[76px] text-3xl leading-[38px] font-semibold lg:w-[545px] mb-6">
          Eng Ishonchli Hosting Xizmati!
        </h2>
        <p className=" lg:text-[18px]  font-[Inter] font-medium lg:mb-[60px] lg:leading-[22px] leading-[19px] mb-[47px] items-center">
          Tezlik, xavfsizlik va uzluksiz ish faoliyati bilan mukammal xizmatni
          tanlang!
        </p>
        <span className="flex  gap-2.5 max-w-[404px]  justify-center">
          <Button
            text={"Bog‘lanish"}
            className={
              "raspberryRed text-white lg:text-[20px] text-[14px] lg:py-5 lg:px-[30px] font-semibold max-w-40 py-[13.5px] px-[22px] leading-[17px] lg:leading-6"
            }
          />
          <Button
            text={" Ko'proq ma'lumot"}
            className="font-semibold lg:text-[20px] lg:py-5 lg:px-[26.5px] border-1 lg:gray10 py-[13.5px] px-[26px] leading-[17px] lg:leading-6 text-[14px]"
          />
        </span>
      </div>
      <video
        autoPlay
        loop
        muted
        className="h-full bg-cover absolute md:z-10 -z-10 opacity-100 blur-[4px] md:blur-none lg:w-[434px]  object-cover md:-right-[0px] md:w-96 md:rounded-[40px] lg:right-[50px] "
        src="/videos/tubes.mp4"
      ></video>
    </div>
  );
}

export default Hero;
