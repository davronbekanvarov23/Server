import React from "react";

function Button({ text, className }) {
  return (
    <>
      <button
        className={`${className}   font-[Inter] rounded-3xl `}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
