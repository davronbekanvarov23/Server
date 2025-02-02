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
              isActive ? "bg-blue-500 text-white   rounded-lg" : "text-gray-100"
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
