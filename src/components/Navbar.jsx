import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import Button from "./Button";
import Translatebtn from "./Translatebtn";
function Navbar() {
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
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal  bg-black rounded-[70px] p-[7px] gap-2.5 w-[660px] ">
            <span className="flex items-center rounded-[60px] px-5 py-[11px] bg-white max-w-[386px] w-full">
              <img
                src="/images/search-icon.svg"
                alt=""
                width={24}
                height={24}
              />
              <input
                type="text"
                placeholder="izlash"
                className="border-0 outline-none ml-[15px] w-full  placeholder:text-[#020F15] placeholder:font-[Inter] placeholder:font-semibold text-[16px] "
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
              "raspberryRed text-white lg:py-5 lg:px-10 lg:font-semibold lg:text-[16px] py-[7.5px] px-[13.5px] font-medium text-[12px] leading-[14.52px] "
            }
          />
          <img
            src="/images/search-icon.svg"
            alt="qidirish"
            width={16}
            height={16}
            className="mx-2 lg:hidden"
          />
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
              className="menu menu-sm dropdown-content absolute left-[-100px] rounded-box z-10 mt-3 bg-black p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
