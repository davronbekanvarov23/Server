import Title from "./Title";

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
      <Title text={"Mijozlar fikri"} />
      <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-[21px] ">
        {comments.map((item) => {
          const { id, description, img, fullName, job } = item;
          return (
            <li
              className=" lg:py-[27px] lg:pr-[38px]  lg:pl-[30px] lavender max-w-[413px] border-1 pastelBlue lg:rounded-[40px] p-3 rounded-[20px]"
              key={id}
            >
              <img
                src="/homeImages/qoshtirnoq.png"
                alt="qoshtirnoq"
                className="lg:w-14 lg:h-[60px] w-7 h-7 "
              />
              <p className=" lg:mt-[34px]  lg:text-[18px] lg:h-[132px] lg:leading-[22.68px] lg:line-clamp-5 line-clamp-3 pt-4 mb-1 text-[12px]">
                {description}
              </p>
              <hr className=" text-[#CFD3E6]" />
              <div className="flex gap-4 mt-4">
                <img
                  src={img}
                  alt={fullName}
                  className="lg:w-[63px] lg:h-[63px] w-9 h-9"
                />
                <span>
                  <h5 className=" font-semibold lg:text-[20px] text-[14px]">
                    {fullName}
                  </h5>
                  <p className=" lg:text-[20px] text-gray-400 text-[14px]">
                    {job}
                  </p>
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
