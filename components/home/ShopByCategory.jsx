import classes from "./shopByCategory.module.css";
import SectionTitle from "../ui/SectionTitle";
import CategoriesSlider from "./CategoriesSlider";
import { productCategories } from "@/utils/data";

function ShopByCategory() {
  return (
    <section className={classes.section}>
      <div className="container">
        <SectionTitle title="Shop By Category" />
        <CategoriesSlider items={productCategories} />
      </div>
    </section>
  );
}

export default ShopByCategory;
