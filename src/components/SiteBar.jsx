import { useState } from "react";
import Button from "./Button";
import { useEffect } from "react";

function SiteBar() {
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsFixed(scrollY > 100);

      setIsHidden(windowHeight + scrollY >= documentHeight);
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
      className={`max-w-[524px] mx-auto font-medium font-[Inter] lavender lg:flex gap-2.5 rounded-[70px] p-1 border-1 border-[#C7C6D2] z-50 hidden bottom-8 backdrop-blur-[8px] ${
        isFixed
          ? "lg:fixed bottom-2 left-1/2 transform -translate-x-1/2"
          : "relative"
      } ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100 "}`}
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
