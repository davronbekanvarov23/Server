import { GoArrowUpRight } from "react-icons/go";
import Title from "./Title";
import Button from "./Button";

function Services() {
  return (
    <div>
      <Title text={"Bizning xizmatlarimiz"} />

      {/* Section top */}

      <div className="flex lg:flex-row flex-col gap-5 mb-5">
        {/* Section-top-left */}

        <div className="bg-[url('/homeImages/Server-img.png')] bg-cover bg-center lg:w-[522px] lg:h-150 lg:pl-10 lg:pt-[329px] lg:pr-[58px] text-white pl-6 pt-[213px] pr-[17px] pb-6 lg:rounded-[40px] rounded-[25px]">
          <Button
            className="bg-white text-black lg:px-[30px] lg:py-[18px] lg:leading-6 lg:text-[20px] font-semibold rounded-4xl text-[14px] py-[7px] px-6 leading-[16px]"
            text={"Ko‘proq"}
          />

          <h4 className="lg:font-semibold lg:text-[40px] lg:mt-9 lg:mb-2.5 font-medium mb-2 text-2xl mt-4">
            SERVER
          </h4>
          <p className="lg:text-[20px] lg:leading-[25px] text-[14px] leading-[17px]">
            Bizning serverlarimiz Germaniya, Rossiya va boshqa yirik
            davlatlarning ishonchli ma'lumot markazlarida joylashgan.{" "}
          </p>
        </div>

        {/* Section-top-right */}

        <div className=" max-w-[736px] flex flex-col gap-5">
          <div className="flex lg:gap-5 gap-2">
            {/* Section VPS */}

            <div className="raspberryRed lg:pl-10 lg:pr-[30px] lg:rounded-[40px] text-white max-w-[413px] lg:pb-10 lg:pt-[30px] p-3 rounded-[20px] ">
              <span className=" lg:w-[60px] lg:h-[60px] lg:mb-0.5 bg-white/40 rounded-[50px] flex justify-center items-center ml-auto w-[30px] h-[30px] mb-[13px] ">
                <GoArrowUpRight size={34} className="hidden lg:flex" />
                <GoArrowUpRight size={20} className=" lg:hidden" />
              </span>
              <h4 className="font-semibold lg:text-[40px] lg:leading-12 font-[Inter] text-[18px] leading-[22px] ">
                VPS/VDS
              </h4>
              <p className="font-medium lg:text-[20px] lg:leading-[25px] lg:mt-2.5 lg:line-clamp-none text-[12px] leading-[15px] mt-1 line-clamp-3  ">
                Resurslarni to‘liq boshqarish imkonini beruvchi virtual
                serverlar. Kuchli texnik infratuzilmamiz bilan qulaylik va
                barqarorlikni ta’minlaymiz.
              </p>
            </div>

            {/* Section Hosting */}

            <div className="lg:pl-10 lg:pr-5 lg:rounded-[40px] lg:pt-[30px] lavender border-1 pastelBlue py-3 pl-[9px] pr-2 min-w-[131px] rounded-[20px]">
              <span className=" lg:w-[60px] lg:h-[60px] lg:mb-[50px] bg-[#BCBCBC66]/40 rounded-[50px] flex justify-center items-center ml-auto w-[30px] h-[30px] mb-[15px] ">
                <GoArrowUpRight size={34} className="hidden lg:flex" />
                <GoArrowUpRight size={20} className=" lg:hidden" />
              </span>
              <h4 className="font-semibold lg:text-[40px] lg:leading-[50px] mainBlack text-[18px] leading-[22px]">
                Hosting
              </h4>
              <p className=" lg:text-[20px] lg:leading-[25px] lg:mt-2.5 text-[12px] leading-[15px] ">
                Saytingiz uchun qulay va tezkor xosting xizmatlari.
              </p>
            </div>
          </div>

          {/* Section Domen */}

          <div className="lg:pl-[30px] lg:pt-[30px] lg:pr-5 lg:pb-10 lavender lg:rounded-[40px] border-1 pastelBlue p-3 rounded-[20px]">
            <span className=" lg:w-[60px] lg:h-[60px] lg:mb-[50px] bg-[#BCBCBC66]/40 rounded-[50px] flex justify-center items-center ml-auto w-[30px] h-[30px] ">
              <GoArrowUpRight size={34} className="hidden lg:flex" />
              <GoArrowUpRight size={20} className=" lg:hidden" />
            </span>
            <h4 className="font-semibold lg:text-[40px] lg:leading-[48px]">
              Domen
            </h4>
            <p className="lg:text-[20px] lg:leading-[25px] lg:mt-2.5 text-[12px] leading-[15.60px] mt-1 ">
              Brendingiz uchun eng mos va esda qolarli domenni tanlashga yordam
              beramiz. Sizga kerakli domenni tez va qulay tarzda ro‘yxatdan
              o‘tkazing!
            </p>
          </div>
        </div>
      </div>

      {/* SECTION BOTTOM */}

      <div className="flex lg:flex-row flex-col gap-5 ">
        {/* First-card */}
        <div className="flex gap-[7px]">
          <div className=" lg:pt-[57px] lg:pr-[48px]  lavender lg:pl-10 lg:pb-10 relative  lg:rounded-[40px] max-w-[413px] border-1 border-[#eaedf9]  p-3 rounded-[20px] min-w-40 ">
            <span className=" lg:w-[60px] lg:h-[60px] lg:absolute  bg-[#BCBCBC]/40 rounded-[50px]  flex justify-center items-center ml-auto right-[30px] top-[30px] w-[30px] h-[30px]">
              <GoArrowUpRight size={34} className="hidden lg:flex" />
              <GoArrowUpRight size={20} className=" lg:hidden" />
            </span>
            <h4 className="font-semibold lg:text-[40px] font-[Inter] max-w-44 lg:leading-[48px] mainBlack text-[18px] leading-[20px] w-20">
              SSL sertifikati
            </h4>
            <p className=" lg:text-[20px] lg:mt-2.5 lg:leading-[25px] text-[12px] leading-[15px]  line-clamp-2 lg:line-clamp-none">
              Saytingiz xavfsizligini oshiring va foydalanuvchilaringiz
              ishonchini qozoning.
            </p>
          </div>

          {/* Mobile */}
          <div className="  p-3 bg-black text-white  lg:hidden pb-4 rounded-[20px] min-w-40  ">
            <span className=" bg-[#BCBCBC66]/40 rounded-[50px] flex justify-center items-center ml-auto w-[30px] h-[30px] ">
              <GoArrowUpRight size={20} />
            </span>
            <h4 className="text-[18px] leading-[18px] w-24 font-semibold  ">
              Qo‘llab quvvatlash
            </h4>
            <p className=" font-medium line-clamp-2 text-[12px] leading-[15px] mt-1">
              24/7 texnik yordam! Biz sizning barcha muammolaringizni tez va
              sifatli hal qilishga tayyormiz.
            </p>
          </div>
        </div>
        {/* Second-card */}
        <div className=" lg:pt-[78px] lg:pr-[52px] lavender lg:pl-10 lg:pb-10 relative max-w-[413px] lg:rounded-[40px] border-1 border-[#eaedf9] p-3 ">
          <span className=" lg:w-[60px] lg:h-[60px] bg-[#BCBCBC]/40 rounded-[50px]  flex justify-center items-center ml-auto lg:absolute right-[30px] top-[30px] w-[30px] h-[30px]">
            <GoArrowUpRight size={34} className="hidden lg:flex" />
            <GoArrowUpRight size={20} className=" lg:hidden" />
          </span>
          <h4 className="font-semibold lg:text-[40px] lg:leading-[50px] text-[18px] leading-[22px]">
            SMS
          </h4>
          <p className="lg:text-[20px] lg:mt-2.5 text-[#292929] lg:leading-[25px] text-[12px] leading-[16.65px] mt-1">
            Mijozlaringizga tez va oson aloqa yo‘llarini taqdim eting. Bizning
            SMS xizmatlarimiz orqali xabarlaringizni istalgan vaqtda va joyda
            yetkazing.
          </p>
        </div>{" "}
        {/* third-card */}
        <div className=" pl-10 pb-10 pt-[53px] pr-[45px] relative max-w-[413px] rounded-[40px] border-1 border-[#eaedf9] bg-black text-white  hidden lg:block">
          <span className=" w-[60px] h-[60px] bg-[#BCBCBC]/40 rounded-[50px]  flex justify-center items-center ml-auto absolute right-[30px] top-[30px]">
            <GoArrowUpRight size={34} />
          </span>
          <h4 className=" font-semibold text-[40px] leading-[50px] ">
            Qo‘llab quvvatlash
          </h4>
          <p className="text-[20px] font-medium mt-2.5  leading-[25px]  ">
            24/7 texnik yordam! Biz sizning barcha muammolaringizni tez va
            sifatli hal qilishga tayyormiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
