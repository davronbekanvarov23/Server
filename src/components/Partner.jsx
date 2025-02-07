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
    <div className=" lg:h-[83px] h-11  ">
      <Marquee pauseOnHover speed={150}>
        {partners.map(({ id, img }) => (
          <div
            key={id}
            className="mx-10 flex-shrink-0 flex justify-center items-center lg:h-[83px] h-11"
          >
            <img src={img} alt="" height={44} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Partner;
