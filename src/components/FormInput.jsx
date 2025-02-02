function FormInput({ placeholder }) {
  return (
    <>
      <input
        type="text"
        className="border-0 lavender h-[70px] w-full pl-10 placeholder:font-[Inter] placeholder:text-[#B4B8C7] text-[20px] rounded-2xl"
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
