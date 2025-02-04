import { GoShieldCheck } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
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
      <h3 className="font-semibold text-6xl mb-10">Nega aynan biz?</h3>
      <ul className="flex gap-5">
        {cards.map((card) => {
          const { id, icon, title, description } = card;
          return (
            <li
              key={id}
              className="lavender p-[30px] rounded-[50px] max-w-[413px] border-1 pastelBlue"
            >
              <span className="raspberryRed w-[65px] h-[65px] rounded-4xl text-white flex justify-center items-center mb-[25px]">
                {" "}
                <img src={icon} alt={title} width={44} height={44} />
              </span>
              <span className=" max-w-[354px]">
                {" "}
                <h4 className="font-semibold text-[32px] mb-0.5">{title}</h4>
                <p className=" text-[18px] leading-[23px] ">{description}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Offer;
