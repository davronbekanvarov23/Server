import Title from "./Title";

const news = [
  {
    id: 1,
    img: "/homeImages/new1.png",
    title: "Bizda katta chegirmalar shoshiling",
  },
  {
    id: 2,
    img: "/homeImages/new2.png",
    title: "Jamoamiz nomidan barchani bayram bilan tabriklaymiz",
  },
  {
    id: 3,
    img: "/homeImages/New.jpg",
    title: "Eng ishonchli serverlar",
  },
  {
    id: 4,
    img: "/homeImages/New.jpg",
    title: "SMS xizmatlari bo‘yicha tariflar o‘zgardi",
  },
];

function News() {
  return (
    <div>
      <Title text={"Yangiliklar"} />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {news.map((item) => {
          const { id, img, title } = item;
          return (
            <li key={id} className=" max-w-[305px]">
              <img
                src={img}
                alt=""
                
                className=" lg:w-[305px] lg:h-[200px] w-[180px] h-[110px] lg:mb-5 mb-1 lavender rounded-[30px]"
              />
              <h6 className="lg:text-[18px] font-medium lg:leading-[23px] text-[12px]  leading-3.5">
                {title}
              </h6>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default News;
