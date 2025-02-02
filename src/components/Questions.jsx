import FormInput from "./FormInput";

function Questions() {
  return (
    <div className="flex justify-between">
      <div className=" max-w-[528px]">
        <h3 className=" font-semibold text-[44px]">
          Qo‘shimcha savollaringiz bormi?
        </h3>
        <p className="text-[18px]">
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
          <button className="px-[30px] bg-black text-white rounded-3xl font-[Inter] font-semibold text-[20px] py-5 ml-auto">
            Jonatish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Questions;
