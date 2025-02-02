import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

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
  const [openId, setOpenId] = useState(null); // Faqat bitta ID ochiq bo‘ladi

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id); // Agar ochilgan bo‘lsa, yopish, aks holda ochish
  };

  return (
    <div>
      <h3 className="font-semibold text-6xl mb-10">
        Ko‘p so‘raladigan savollar
      </h3>
      <ul>
        <hr />
        {questions.map((item) => (
          <li key={item.id} className="">
            <span
              className={`flex justify-between items-center ${
                openId === item.id ? "pt-7 pb-4" : "py-10"
              } pr-5 cursor-pointer`}
              onClick={() => toggleItem(item.id)}
            >
              <p className="text-2xl">{item.question}</p>
              <IoIosArrowDown
                size={34}
                className={`transform transition-all ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              />
            </span>

            {openId === item.id && (
              <p className="text-[#8B8B8D] text-[20px] mb-[28px] pr-[108px]">
                {item.answer}
              </p>
            )}

            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Answers;
