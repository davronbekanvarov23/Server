function FormInput({ placeholder }) {
  return (
    <>
      <input
        type="text"
        className="lg:h-[70px] lg:placeholder:text-[18px] lg:rounded-[20px] lg:pl-10 border-0 lavender h-11 w-full  placeholder:font-[Inter] placeholder:text-[#B4B8C7] rounded-[10px] text-2xl placeholder:text-[12px] pl-3"
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
