import { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";

function SiteBar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      id: 1,
      text: "Domen",
    },
    {
      id: 2,
      text: "Hosting",
    },
    {
      id: 3,
      text: "Server",
    },
    {
      id: 4,
      text: "VPS/VDS",
    },
  ];

  return (
    <ul
      className={`max-w-[524px] mx-auto font-medium font-[Inter] mb-5 lavender flex gap-2.5 rounded-[70px] p-1 border-1 border-[#C7C6D2] z-50  ${
        isFixed
          ? "fixed bottom-0 left-1/2 transform -translate-x-1/2"
          : "relative"
      }`}
    >
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className=" py-[19px] px-[15px] lavender rounded-[50px]"
          >
            {link.text}
          </li>
        );
      })}

      <Button
        text={"Bog‘lanish"}
        className={"raspberryRed text-white py-[19px] px-5"}
      />
    </ul>
  );
}

export default SiteBar;
