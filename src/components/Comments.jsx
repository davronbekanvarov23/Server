const comments = [
  {
    id: 1,
    description:
      "Hosting xizmatlari juda tez va ishonchli! Domen va SSL o'rnatish jarayoni juda oson bo'ldi. Rahmat!",
    img: "/homeImages/Ellipse1.png",
    fullName: "Bobur Oltiboyev",
    job: "CEO",
  },
  {
    id: 2,
    description:
      "Bu sayt orqali domen va hosting xizmatini olish ajoyib tajriba bo'ldi. Narxlari hamyonbop, xizmat sifati yuqori darajada. SSL sertifikatni ham bir zumda o'rnatib olish mumkin ekan.",
    img: "/homeImages/Ellipse2.png",
    fullName: "Jamshid Qodir",
    job: "CEO ",
  },
  {
    id: 3,
    description:
      "Men uzoq vaqt davomida hosting va domen xizmatlari uchun ishonchli kompaniya qidirib yurdim. Bu sayt meni haqiqatan ham hayratda qoldirdi! Ularning platformasi oddiy va tushunarli qilib yaratilgan, yangi boshlovchilar uchun juda qulay. Domen ro'yxatdan o'tkazish jarayoni oson bo'ldi va SSL sertifikatini o'rnatish bir necha daqiqada amalga oshdi. Xizmat sifati juda yuqori — saytlarim tez va barqaror ishlayapti. Mijozlarga xizmat ko'rsatish guruhi doimo yordamga tayyor va ular har bir savolga tezda javob berishdi. Bu saytni barcha tanishlarimga tavsiya qilaman. Xizmatlari uchun katta rahmat!",
    img: "/homeImages/Ellipse3.png",
    fullName: "Sayora Isayeva",
    job: "CEO",
  },
];

function Comments() {
  return (
    <div>
      <h3 className="font-semibold text-[66px] mb-10">Mijozlar fikri</h3>
      <ul className=" grid grid-cols-3 gap-[21px] rounded-3xl">
        {comments.map((item) => {
          const { id, description, img, fullName, job } = item;
          return (
            <li
              className=" py-[27px] pr-[38px]  pl-[30px] lavender max-w-[413px] border-1 pastelBlue rounded-[40px]"
              key={id}
            >
              <img
                src="/homeImages/qoshtirnoq.png"
                alt="qoshtirnoq"
                width={56}
                height={60}
              />
              <p className=" mt-[34px] mb-4 text-[18px] h-34 line-clamp-5">
                {description}
              </p>
              <hr className=" text-[#CFD3E6]" />
              <div className="flex gap-4 mt-4">
                <img src={img} alt={fullName} width={63} height={63} />
                <span>
                  <h5 className=" font-semibold text-[20px]">{fullName}</h5>
                  <p className=" text-[20px] text-gray-400">{job}</p>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Comments;
