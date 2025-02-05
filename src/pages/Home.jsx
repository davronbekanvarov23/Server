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
    <div className="flex gap-[120px] flex-col">
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
