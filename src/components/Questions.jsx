import FormInput from "./FormInput";

function Questions() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 justify-between ">
      <div className=" max-w-[528px]">
        <h3 className=" font-semibold lg:text-[46px] text-2xl mainBlack">
          Qo‘shimcha savollaringiz bormi?
        </h3>
        <p className="lg:text-[20px] text-[14px] mt-2">
          Savollaringizni qoldiring o‘zimiz aloqaga chiqamiz.
        </p>
      </div>
      <div className=" max-w-[630px] w-full">
        <form action="" className="flex flex-col gap-5 ">
          <span className=" flex gap-5">
            <FormInput placeholder={"Ism"} />
            <FormInput placeholder={"Familiya"} />
          </span>
          <FormInput placeholder={"Telefon raqam"} />
          <FormInput placeholder={"Savolingizni yozib qoldiring"} />
          <hr className="text-white" />
          <button className="lg:px-[30px] lg:py-5 lg:rounded-[70px] lg:text-[20px] bg-black text-white  font-[Inter] font-semibold ml-auto cursor-pointer px-10 py-[12.5px] text-[16px] leading-[19px] rounded-[20px]">
            Jo‘natish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Questions;
