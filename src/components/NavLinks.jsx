import { NavLink } from "react-router-dom";

const links = [
  { id: 1, text: "To‘lov usuli", path: "/payment" },
  { id: 2, text: "Hamkorlar", path: "/partners" },
];

function NavLinks() {
  return (
    <>
      {links.map(({ id, text, path }) => (
        <li key={id}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "raspberryRed text-white rounded-lg px-[15px] py-[11px] font-[Inter] font-semibold text-[16px]"
                : "text-gray-100 px-[15px] py-[11px] font-[Inter] font-semibold text-[16px]"
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
