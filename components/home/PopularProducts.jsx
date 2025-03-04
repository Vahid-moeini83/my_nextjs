import classes from "./popularProducts.module.css";
import SectionTitle from "../ui/SectionTitle";
import ProductsSlider from "./ProductsSlider";
import { getAllProducts } from "@/lib/faker";

function PopularProducts() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div className="container">
        <SectionTitle title="Popular products" />
        <ProductsSlider
          products={products}
          navigation={true}
          cardBorder={true}
          addToCartBtn={true}
        />
      </div>
    </section>
  );
}

export default PopularProducts;
