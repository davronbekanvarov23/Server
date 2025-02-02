import Marquee from "react-fast-marquee";
const partners = [
  {
    id: 1,
    img: "/click.png",
  },
  {
    id: 2,
    img: "/Payme.png",
  },
  {
    id: 3,
    img: "/Uzum.png",
  },
  {
    id: 4,
    img: "paynet.png",
  },
  {
    id: 5,
    img: "upay.png",
  },
  {
    id: 6,
    img: "oson.png",
  },
  {
    id: 7,
    img: "Freemoney.png",
  },
];

function Partner() {
  return (
    <div className="h-[83px] overflow-hidden">
      <Marquee pauseOnHover speed={50}>
        {partners.map(({ id, img }) => (
          <div
            key={id}
            className="mx-10 flex-shrink-0 flex justify-center items-center h-[83px]"
          >
            <img src={img} alt="" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Partner;
