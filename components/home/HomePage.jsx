import AutoSlider from "./AutoSlider";
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
    </>
  );
}

export default HomePage;
