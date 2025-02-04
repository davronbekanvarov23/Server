const news = [
  {
    id: 1,
    img: "",
    title: "Bizda katta chegirmalar shoshiling",
  },
  {
    id: 2,
    img: "",
    title: "Jamoamiz nomidan barchani bayram bilan tabriklaymiz",
  },
  {
    id: 3,
    img: "",
    title: "Eng ishonchli serverlar",
  },
  {
    id: 4,
    img: "",
    title: "SMS xizmatlari bo‘yicha tariflar o‘zgardi",
  },
];

function News() {
  return (
    <div>
      <h3 className="font-semibold text-[66px] mb-10">Yangiliklar</h3>
      <ul className="flex gap-5">
        {news.map((item) => {
          const { id, img, title } = item;
          return (
            <li key={id}>
              <img
                src={img}
                alt=""
                width={305}
                height={200}
                className=" mb-5 lavender rounded-[30px]"
              />
              <h6 className="text-[21px] font-medium leading-[23px]">{title}</h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default News;
