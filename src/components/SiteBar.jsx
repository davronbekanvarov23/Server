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
    <ul className=" max-w-[524px] mx-auto font-medium font-[Inter] mb-5 lavender flex gap-4 h-16 justify-center items-center rounded-4xl">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <button className="btn font-medium border-0 lavender">
              {link.text}
            </button>
          </li>
        );
      })}

      <Button
        text={"Bog‘lanish"}
        className={"raspberryRed text-white  text-[16px]  py-[19px] px-5"}
      />
    </ul>
  );
}

export default SiteBar;
