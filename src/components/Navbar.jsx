import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <div className="py-8">
      <div className="navbar align-content  p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 bg-black p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <Link className="" to={"/"}>
            <img
              src="/images/Logo.svg"
              alt="logo"
              width="196"
              height="60"
              // className="h-16"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  bg-black rounded-[70px] p-[7px] gap-2.5">
            <span className="flex items-center rounded-[60px] px-5 py-[11px] bg-white max-w-[125px] w-full">
              <img src="/images/search-icon.svg" alt="" width={24} height={24} />
              <input
                type="text"
                placeholder="izlash"
                className="border-0 outline-none ml-[15px] w-full  placeholder:text-black placeholder:font-[Inter] placeholder:font-semibold text-[16px] text-black"
              />
            </span>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <Button
            text={"Kirish "}
            className={
              "raspberryRed text-white py-5 px-10 font-semibold   text-[16px] h-[59px] "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
