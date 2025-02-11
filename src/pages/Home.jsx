import {
  Answers,
  Comments,
  Hero,
  News,
  Offer,
  Partner,
  Questions,
  Services,
  SiteBar,
} from "../components";

function Home() {
  return (
    <div className="align-content flex lg:gap-[120px] gap-9 flex-col">
      <Hero />
      <SiteBar />
      <Offer />
      <Services />
      <News />
      <Comments />
      <Partner />
      <Answers />
      <Questions />
    </div>
  );
}

export default Home;
