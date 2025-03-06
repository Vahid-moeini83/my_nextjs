import classes from "./peopleProductsSlider.module.css";
import ProductsSlider from "../home/ProductsSlider";
import SectionTitle from "../ui/SectionTitle";
import { getAllProducts } from "@/lib/faker";

function PeopleProductsSlider() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div>
        <SectionTitle title="People also bought" />
        <ProductsSlider products={products} navigation={true} />
      </div>
    </section>
  );
}

export default PeopleProductsSlider;
