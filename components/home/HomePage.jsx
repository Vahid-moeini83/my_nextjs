import SectionIntro from "./SectionIntro";
import AutoSlider from "./AutoSlider";
import Services from "./Services";
import ShopByCategory from "./ShopByCategory";
import HotDeals from "./HotDeals";
import PopularProducts from "./PopularProducts";
import RecommendedProducts from "./RecommendedProducts";
import Comments from "./Comments";
import CompanyLogos from "./CompanyLogos";
import Map from "./Map";
import MapSection from "./MapSection";

function HomePage() {
  return (
    <>
      <SectionIntro />
      <AutoSlider />
      <Services />
      <ShopByCategory />
      <HotDeals />
      <PopularProducts />
      <RecommendedProducts />
      <Comments />
      <CompanyLogos />
      <MapSection />
    </>
  );
}

export default HomePage;
