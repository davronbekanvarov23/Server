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
    <div className=" mt-[120px] bg-black Footerref" >
      <div className="align-content">
        <footer className="footer sm:footer-horizontal  text-base-100 t p-10">
          <nav className=" max-w-[490px]">
            <img
              src="/images/logo-footer.svg"
              alt="footer logo"
              width={163}
              height={49}
            />
            <p className=" font-semibold text-3xl mt-12 mb-5">
              200K mijozlar bizga ishonishgan. Siz ham bizga qo‘shiling!
            </p>
            <Button
              text={"Kirish"}
              className={
                "font-semibold text-[16px] h-[59px] max-w-[125px] w-full bg-white mainBlack"
              }
            />
          </nav>
          <nav className=" gap-4">
            {links.map((item) => {
              return (
                <Link className="link link-hover text-2xl" key={item.id}>
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <nav className=" mt-auto ml-auto">
            <div className="grid grid-flow-col gap-[22px]">
              {socials.map((social) => {
                const { id, link, img, title } = social;
                return (
                  <Link to={link} key={id}>
                    <img src={img} alt={title} width={36} height={36} />
                  </Link>
                );
              })}
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
