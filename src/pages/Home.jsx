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
    <div>
      <Hero />
      <SiteBar />
      <div className="flex gap-[120px] flex-col">
        {" "}
        <Offer />
        <Services />
        <News />
        <Comments />
        <Partner />
        <Answers />
        <Questions />
      </div>
    </div>
  );
}

export default Home;
