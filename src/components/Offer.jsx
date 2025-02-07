import Title from "./Title";
const cards = [
  {
    id: 1,
    icon: "/homeImages/belief-icon.svg",
    title: "Ishonchlilik",
    description:
      "Biz 99,9% ish vaqti va ma'lumotlar xavfsizligi bilan serverlar va Internetning barqaror ishlashini ta'minlaymiz.",
  },
  {
    id: 2,
    icon: "/homeImages/rocket.svg",
    title: "Yuqori tezlik",
    description:
      "“Bizning serverlarimiz yuqori tezlik va ishonchlilikni kafolatlaydi,mijozlarimizga uzluksiz xizmat ko‘rsatadi.”",
  },
  {
    id: 3,
    icon: "/homeImages/wallet-check.svg",
    title: "Qulay narx",
    description:
      "Biz sizning ehtiyojlaringiz va budjetingizga mos keladigan raqobatbardosh tariflarni taklif qilamiz.",
  },
];

function Offer() {
  return (
    <div>
      <Title text={"Nega aynan biz?"} />
      <ul className="grid lg:grid-cols-3 gap-5">
        {cards.map((card) => {
          const { id, icon, title, description } = card;
          return (
            <li
              key={id}
              className="lavender lg:p-[30px] lg:rounded-[50px] max-w-[413px] border-1 pastelBlue pl-6 pt-6 pr-[18px] pb-[30px] rounded-[30px]"
            >
              <span className=" flex lg:block gap-2 items-center mb-3">
                <span className="raspberryRed lg:w-[65px] lg:h-[65px] rounded-4xl text-white flex justify-center items-center lg:mb-[25px]  w-[30px] h-[30px]">
                  {" "}
                  <img
                    src={icon}
                    alt={title}
                    width={44}
                    height={44}
                    className="lg:w-11 lg:h-11 w-5 h-5"
                  />
                </span>
                <h4 className="lg:font-semibold lg:text-[32px] lg:mb-0.5 text-[20px] leading-[25px] font-medium ">
                  {title}
                </h4>
              </span>
              <span className=" max-w-[354px]">
                {" "}
                <p className=" lg:text-[18px] lg:leading-[23px] text-[16px] leading-5 ">{description}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Offer;
