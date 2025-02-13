import { Link } from "react-router-dom";
import Button from "./Button";

const links = [
  {
    id: 1,
    title: "Domen",
    link: "",
  },

  {
    id: 2,
    title: "Hosting",
    link: "",
  },
  {
    id: 3,
    title: "Server",
    link: "",
  },
  {
    id: 4,
    title: "VPS/VDS",
    link: "",
  },
  {
    id: 5,
    title: "SMS",
    link: "",
  },
  {
    id: 6,
    title: "SSL sertifikat",
    link: "",
  },
];
const socials = [
  {
    id: 1,
    img: "/images/telegram.svg",
    title: "telegram",
    link: "",
  },
  {
    id: 2,
    img: "/images/instagramm.svg",
    title: "instagramm",
    link: "",
  },
  {
    id: 3,
    img: "/images/twitter.svg",
    title: "twitter",
    link: "",
  },
  {
    id: 4,
    img: "/images/fecebook.svg",
    title: "fecebook",
    link: "",
  },
];

function Footer() {
  return (
    <div className=" mt-[120px] bg-black ">
      <div className="align-content">
        <footer className="footer sm:footer-horizontal  text-base-100  lg:p-10 py-6">
          <nav className=" max-w-[490px]">
            <img
              src="/images/logo-footer.svg"
              alt="footer logo"
              className="lg:w-[163px] lg:h-[49px] w-[120px] h-9"
            />
            <p className=" font-semibold lg:text-3xl lg:mt-12 lg:mb-5 text-[20px] leading-[25px] my-6">
              200K mijozlar bizga ishonishgan. Siz ham bizga qo‘shiling!
            </p>
            <Button
              text={"Kirish"}
              className={
                "font-semibold lg:text-[16px] text-[14px] py-[13.5px] px-[23px]  lg:py-5 lg:px-10 bg-white mainBlack ml-auto lg:ml-0"
              }
            />
          </nav>
          <div className="flex gap-12">
            <nav className="flex flex-col gap-4">
              {links.map((item) => {
                return (
                  <Link
                    className="link link-hover lg:text-2xl text-[20px]"
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
            <span className="flex flex-col ml-auto gap-4 md:hidden">
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Foydalanuvchi shartlar
              </Link>{" "}
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Kompaniya haqida
              </Link>{" "}
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Maxfiylik siyosati
              </Link>
            </span>
          </div>

          <nav className="h-full">
            <span className="md:flex flex-col ml-auto gap-4 hidden">
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Foydalanuvchi shartlar
              </Link>{" "}
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Kompaniya haqida
              </Link>{" "}
              <Link className="link link-hover lg:text-2xl text-[20px]">
                Maxfiylik siyosati
              </Link>
            </span>
            <span className="grid grid-flow-col gap-[22px] mt-auto  ">
              {socials.map((social) => {
                const { id, link, img, title } = social;
                return (
                  <Link to={link} key={id}>
                    <img
                      src={img}
                      alt={title}
                      className="lg:w-9 lg:h-9 w-6 h-6"
                    />
                  </Link>
                );
              })}
            </span>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
