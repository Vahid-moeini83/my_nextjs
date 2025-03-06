import classes from "./recentProductsSlider.module.css";
import ProductsSlider from "../home/ProductsSlider";
import SectionTitle from "../ui/SectionTitle";
import { getAllProducts } from "@/lib/faker";

function RecentProductsSlider() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div>
        <SectionTitle title="Recently viewed" />
        <ProductsSlider products={products} navigation={true} />
      </div>
    </section>
  );
}

export default RecentProductsSlider;
