import { GoArrowUpRight } from "react-icons/go";

function Services() {
  return (
    <div>
      <h3 className="font-semibold text-6xl mb-10">Bizning xizmatlarimiz</h3>

      {/* Section top */}

      <div className="flex gap-5 mb-5">
        {/* Section-top-left */}

        <div className="bg-[url('/Server-img.png')] bg-cover bg-center w-[522px] h-150 pl-10 pt-[329px] text-white pr-[58px] rounded-3xl">
          <button className="btn  p-[30px] font-[Inter] text-[20px] font-semibold rounded-4xl">
            Ko‘proq
          </button>
          <h4 className=" font-semibold text-6xl mt-2.5 mb-2.5">SERVER</h4>
          <p className=" text-[20px]">
            Bizning serverlarimiz Germaniya, Rossiya va boshqa yirik
            davlatlarning ishonchli ma'lumot markazlarida joylashgan.{" "}
          </p>
        </div>

        {/* Section-top-right */}

        <div className=" max-w-[736px] flex flex-col gap-5">
          <div className="flex gap-5">
            {/* Section VPS */}

            <div className="raspberryRed pl-10 pr-[30px] text-white max-w-[413px] pb-10 pt-[30px] rounded-4xl">
              <span className=" w-[60px] h-[60px] bg-white/40 rounded-4xl flex justify-center items-center ml-auto ">
                <GoArrowUpRight size={34} />
              </span>
              <h4 className="font-semibold text-[40px]">VPS/VDS</h4>
              <p className="font-medium text-[20px] leading-tight">
                Resurslarni to‘liq boshqarish imkonini beruvchi virtual
                serverlar. Kuchli texnik infratuzilmamiz bilan qulaylik va
                barqarorlikni ta’minlaymiz.
              </p>
            </div>

            {/* Section Hosting */}

            <div className="lavender pl-10 pr-5 rounded-3xl pt-[30px]">
              <span className=" w-[60px] h-[60px] bg-[#BCBCBC] rounded-4xl mb-12 flex justify-center items-center ml-auto ">
                <GoArrowUpRight size={34} />
              </span>
              <h4 className="font-semibold text-[40px]">Hosting</h4>
              <p className=" text-[20px] ">
                Saytingiz uchun qulay va tezkor xosting xizmatlari.
              </p>
            </div>
          </div>

          {/* Section Domen */}

          <div className="pl-[30px] pt-[30px] pr-5 pb-10 lavender rounded-3xl">
            <span className=" w-[60px] h-[60px] bg-[#BCBCBC] rounded-4xl mb-12 flex justify-center items-center ml-auto ">
              <GoArrowUpRight size={34} />
            </span>
            <h4 className="font-semibold text-[40px]">Domen</h4>
            <p className=" text-[20px]leading-tight ">
              Brendingiz uchun eng mos va esda qolarli domenni tanlashga yordam
              beramiz. Sizga kerakli domenni tez va qulay tarzda ro‘yxatdan
              o‘tkazing!
            </p>
          </div>
        </div>
      </div>

      {/* SECTION BOTTOM */}

      <div className="flex gap-5">
        {/* First-card */}
        <div className="pl-10 pt-[57px] pr-[30px] pb-10 lavender relative max-w-[413px] rounded-3xl ">
          <span className=" w-[60px] h-[60px] bg-[#BCBCBC] rounded-4xl  flex justify-center items-center ml-auto absolute right-[30px] top-[30px]">
            <GoArrowUpRight size={34} />
          </span>
          <h4 className="font-semibold text-[40px] font-[Inter] max-w-44 leading-tight">
            SSL sertifikati
          </h4>
          <p className=" text-[20px] mt-2.5 leading-tight">
            Saytingiz xavfsizligini oshiring va foydalanuvchilaringiz ishonchini
            qozoning.
          </p>
        </div>
        {/* Second-card */}
        <div className="pl-10 pt-[57px] pr-[30px] pb-10 lavender relative max-w-[413px] rounded-3xl">
          <span className=" w-[60px] h-[60px] bg-[#BCBCBC] rounded-4xl  flex justify-center items-center ml-auto absolute right-[30px] top-[30px]">
            <GoArrowUpRight size={34} />
          </span>
          <h4 className="font-semibold text-[40px] ">SMS</h4>
          <p className=" text-[20px] mt-2.5 leading-tight">
            Mijozlaringizga tez va oson aloqa yo‘llarini taqdim eting. Bizning
            SMS xizmatlarimiz orqali xabarlaringizni istalgan vaqtda va joyda
            yetkazing.
          </p>
        </div>{" "}
        {/* third-card */}
        <div className="pl-10 pt-[57px] pr-[30px] pb-10 bg-black text-white   relative max-w-[413px] rounded-3xl">
          <span className=" w-[60px] h-[60px] bg-[#bcbcbca7] rounded-4xl  flex justify-center items-center ml-auto absolute right-[30px] top-[30px]">
            <GoArrowUpRight size={34} />
          </span>
          <h4 className="font-semibold text-[40px] leading-tight">
            Qo‘llab quvvatlash
          </h4>
          <p className=" text-[20px] mt-2.5 leading-tight">
            24/7 texnik yordam! Biz sizning barcha muammolaringizni tez va
            sifatli hal qilishga tayyormiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
