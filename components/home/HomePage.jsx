import AutoSlider from "./AutoSlider";
import Comments from "./Comments";
import CompanyLogos from "./CompanyLogos";
import HotDeals from "./HotDeals";
import SectionIntro from "./SectionIntro";
import Services from "./Services";
import ShopByCategory from "./ShopByCategory";

function HomePage() {
  return (
    <>
      <SectionIntro />
      <AutoSlider />
      <Services />
      <ShopByCategory />
      <HotDeals />
      <Comments />
      <CompanyLogos />
    </>
  );
}

export default HomePage;
