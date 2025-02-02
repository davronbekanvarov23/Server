import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CiSearch } from "react-icons/ci";

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
              src="/Logo.svg"
              alt="logo"
              width="196"
              height="60"
              // className="h-16"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  bg-black rounded-4xl px-4">
            <div className="flex items-center rounded-2xl px-3  bg-amber-50">
              <CiSearch className="text-xl" />
              <input
                type="text"
                placeholder="izlash"
                className="border-0 outline-none ml-2 w-full max-w-16 placeholder:text-black"
              />
            </div>
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <Button
            text={"Kirish "}
            className={
              "raspberryRed text-white py-5 px-10 font-semibold   text-[16px] "
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
