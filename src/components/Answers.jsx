import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Title from "./Title";

const questions = [
  {
    id: 1,
    question: "Web-hosting nima va u qanday ishlaydi?",
    answer:
      "Web-xosting - bu sizning web-saytingizga uning fayllarini (HTML, tasvirlar, videolar va h.k.) domen nomingizni kiritganda (masalan, sysdc.uz) tashrif buyuruvchilarga yetkazib beruvchi serverda saqlash orqali internetda foydalanish imkonini beruvchi xizmatdir. ularning brauzeriga. Xosting serveri maʼlumotlaringizni saqlash, qayta ishlash va yetkazib berishni boshqarish orqali saytingizning 24/7 ishlay olishini taʼminlaydi. Birgalikda hosting (byudjetga mos, umumiy resurslar), VPS xosting (umumiy serverdagi ajratilgan resurslar), ajratilgan xosting (saytingiz uchun shaxsiy server) va bulutli xosting (miqyosda kengayadigan va ishonchli) kabi hostingning har xil turlari mavjud. bir nechta serverlar). sysdc.uz saytida biz har qanday hajmdagi veb-saytlar uchun yuqori tezlik, xavfsizlik va 24/7 yordamga ega moslashtirilgan xosting yechimlarini taqdim etamiz. Ishni boshlash uchun info@sysdc.uz manziliga murojaat qiling!",
  },
  {
    id: 2,
    question: "Shared hosting bizning saytimiz uchun to‘g‘ri tanlovmi?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    question: "Mavjud domenimni SYSDC.uz xizmatlariga ulashim mumkinmi?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    question: "Xostingim xavfsiz ekanligini qanday bilsam bo'ladi?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

function Answers() {
  const [openId, setOpenId] = useState(null);
  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <Title text={"Ko‘p so‘raladigan savollar"} />
      <ul>
        <hr className="text-[#eaedf9] text-[3px]" />
        {questions.map((item) => (
          <li key={item.id} className="">
            <span
              className={`flex justify-between items-center ${
                openId === item.id
                  ? "lg:pt-7 lg:pb-4 pt-4 pb-2"
                  : "py-3 lg:py-10"
              } pr-5 cursor-pointer`}
              onClick={() => toggleItem(item.id)}
            >
              <p className="lg:text-[28px] text-[12px]">{item.question}</p>
              <IoIosArrowDown
                size={34}
                className={`hidden lg:flex transform transition-all ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              />{" "}
              <IoIosArrowDown
                size={10}
                className={`lg:hidden transform transition-all ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              />
            </span>

            {openId === item.id && (
              <p className="text-[#8B8B8D] lg:text-2xl lg:mb-[28px] lg:pr-[108px] text-[8px] pr-8">
                {item.answer}
              </p>
            )}

            <hr className="text-[#eaedf9] text-[3px]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Answers;
