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
    <ul className=" max-w-[524px] mx-auto font-medium font-[Inter] mb-5 lavender flex gap-2.5 h-16 justify-center items-center rounded-4xl">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <button className="btn font-medium h-[57px] border-0 lavender">
              {link.text}
            </button>
          </li>
        );
      })}

      <Button
        text={"Bog‘lanish"}
        className={"  raspberryRed text-white  text-[20px] h-[57px] "}
      />
    </ul>
  );
}

export default SiteBar;
