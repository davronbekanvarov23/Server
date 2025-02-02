import React from "react";

function Button({ text, className }) {
  return (
    <>
      <button
        className={`${className} btn font-[Inter] border-0  rounded-3xl font-semibold`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
