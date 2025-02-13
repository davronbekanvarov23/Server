import NavLinks from "./NavLinks";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Translatebtn from "./Translatebtn";
import { barLinks } from "./BarLinks";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className="lg:py-8 py-1 lg:relative sticky  top-0 left-0 w-full bg-white z-50 shadow-md md:shadow-[0]">
      <div className="navbar align-content p-0 ">
        <div className="navbar-start">
          <Link className="" to={"/"}>
            <img
              src="/images/Logo.svg"
              alt="logo"
              width="196"
              height="60"
              className="h-7 w-[92px] lg:w-[196px] lg:h-[60px]"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex max-w-[660px] w-full justify-center ">
          <ul
            className={`menu menu-horizontal bg-black rounded-[70px] p-[7px] gap-2.5 ${
              isExpanded ? " w-full" : "w-[400px]"
            } `}
          >
            <span
              className={`flex items-center rounded-[60px] px-5 py-[11px] bg-white border border-gray-300  
      ${isExpanded ? " w-full max-w-[370px] z-50 shadow-lg" : "max-w-[125px]"}`}
              onClick={() => setIsExpanded(true)}
            >
              <img
                src="/images/search-icon.svg"
                alt=""
                width={24}
                height={24}
              />
              <input
                type="text"
                value={inputValue}
                placeholder="izlash"
                onFocus={() => setIsExpanded(true)}
                onBlur={() => {
                  setIsExpanded(false);
                  setInputValue("");
                }}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-0 outline-none ml-[15px] w-full placeholder:text-[#020F15] placeholder:font-[Inter] placeholder:font-semibold text-[16px]"
              />
              <RxCross2
                onClick={() => setIsExpanded(false)}
                className={`${isExpanded ? "flex" : "hidden"} cursor-pointer `}
              />
            </span>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end ">
          <Translatebtn className={"lg:flex mr-8 hidden"} />
          <Button
            text={"Kirish "}
            className={
              "raspberryRed text-white lg:py-5 lg:px-10 lg:font-semibold lg:text-[16px] py-[7.5px] px-[13.5px] font-medium text-[12px] leading-[14.52px] mr-2"
            }
          />

          <span className="relative h-6 items-center flex ">
            {" "}
            {isEditing ? (
              <span className="absolute -top-1 -left-63 flex items-center border border-gray-300 bg-white p-1  z-50 rounded-[40px]  ">
                {" "}
                <input
                  type="text"
                  value={innputValue}
                  onBlur={() => {
                    setIsEditing(false);
                    setInputValue("");
                  }}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="  ml-[5px] border-0 outline-none placeholder:text-[#020F15] placeholder:font-[Inter] placeholder:font-semibold text-[16px] mx-w-[400px] "
                />
                <RxCross2
                  onClick={() => setIsEditing(false)}
                  className="  cursor-pointer"
                />
              </span>
            ) : (
              <img
                onClick={() => setIsEditing(true)}
                src="/images/search-icon.svg"
                alt="qidirish"
                width={16}
                height={16}
                className=" lg:hidden mr-2 cursor-pointer"
              />
            )}
          </span>
          <Translatebtn className={"lg:hidden"} />
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                  fill="#282728"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute left-[-100px] rounded-box z-10 mt-3 bg-black p-2 shadow "
            >
              <NavLinks />
              {barLinks.map((item) => {
                return (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "raspberryRed text-white px-[15px] py-[11px] font-[Inter] font-semibold text-[16px] rounded-[40px]"
                        : "text-gray-100 px-[15px] py-[11px] font-[Inter] font-semibold text-[16px]"
                    }
                  >
                    {item.text}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
