import Marquee from "react-fast-marquee";
const partners = [
  {
    id: 1,
    img: "/homeImages/click.png",
  },
  {
    id: 2,
    img: "/homeImages/Payme.png",
  },
  {
    id: 3,
    img: "/homeImages/Uzum.png",
  },
  {
    id: 4,
    img: "/homeImages/paynet.png",
  },
  {
    id: 5,
    img: "/homeImages/upay.png",
  },
  {
    id: 6,
    img: "/homeImages/oson.png",
  },
  {
    id: 7,
    img: "/homeImages/Freemoney.png",
  },
];

function Partner() {
  return (
    <div className="relative h-[83px] overflow-hidden shadow-[inset_20px_0_20px_-10px_rgba(0,0,0,0.5),inset_-20px_0_20px_-10px_rgba(0,0,0,0.5)]">
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
