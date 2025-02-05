function FormInput({ placeholder }) {
  return (
    <>
      <input
        type="text"
        className="border-0 lavender outline-none h-[70px] w-full pl-10 placeholder:font-[Inter] placeholder:text-[#B4B8C7] placeholder:text-[18px] rounded-[20px] text-2xl"
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
