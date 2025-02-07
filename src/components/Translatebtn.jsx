import React from "react";

function Translatebtn({ className }) {
  return (
    <>
      <select
        name="translateBtn"
        id="translateBtn"
        className={`border-0  font-[Inter] lg:font-semibold lg:text-[16px]  font-medium text-[14px] leading-[17px] ${className}`}
      >
        <option value="uzb">UZB</option>
        <option value="eng">ENG</option>
      </select>
    </>
  );
}

export default Translatebtn;
