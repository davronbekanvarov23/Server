import Button from "./Button";

function SiteBar() {
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
    <ul className=" max-w-[524px] mx-auto font-medium font-[Inter] mb-5 lavender flex gap-2.5 rounded-[70px] p-1 border-1 border-[#C7C6D2] sticky z-50 top-0">
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
