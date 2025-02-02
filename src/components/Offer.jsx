import { GoShieldCheck } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
const cards = [
  {
    id: 1,
    icon: <GoShieldCheck size={43} />,
    title: "Ishonchlilik",
    description:
      "Biz 99,9% ish vaqti va ma'lumotlar xavfsizligi bilan serverlar va Internetning barqaror ishlashini ta'minlaymiz.",
  },
  {
    id: 2,
    icon: <IoRocketOutline size={43} />,
    title: "Yuqori tezlik",
    description:
      "“Bizning serverlarimiz yuqori tezlik va ishonchlilikni kafolatlaydi,mijozlarimizga uzluksiz xizmat ko‘rsatadi.”",
  },
  {
    id: 3,
    icon: <CiWallet size={43} />,
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
            <li key={id} className="lavender p-[30px] rounded-4xl">
              <span className="raspberryRed w-16 h-16 rounded-4xl text-white flex justify-center items-center mb-6">
                {" "}
                {icon}
              </span>
              <h4 className=" mb-2.5 font-semibold text-3xl">{title}</h4>
              <p className=" text-[18px]">{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Offer;
