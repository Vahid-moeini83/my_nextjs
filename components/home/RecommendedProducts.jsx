import { getAllProducts } from "@/lib/faker";
import SectionTitle from "../ui/SectionTitle";
import ProductsSlider from "./ProductsSlider";
import classes from "./recommendedProducts.module.css";

function RecommendedProducts() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div className="container">
        <SectionTitle title="Recommended products" />
        <ProductsSlider
          products={products}
          navigation={true}
          addToCartBtn={true}
          cardBorder={true}
        />
      </div>
    </section>
  );
}

export default RecommendedProducts;
