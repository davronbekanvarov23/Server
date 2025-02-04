
function Button({ text, className }) {
  return (
    <>
      <button
        className={`${className}   font-[Inter] rounded-[50px] cursor-pointer `}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
