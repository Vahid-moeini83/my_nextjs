import classes from "./hotDeals.module.css";
import SectionTitle from "../ui/SectionTitle";
import HotDealsTimer from "./HotDealsTimer";
import ProductsSlider from "./ProductsSlider";
import { getAllProducts } from "@/lib/faker";

function HotDeals() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.header}>
          <SectionTitle title="Hot Deals" />
          <HotDealsTimer targetDate="2025-04-01T00:00:00" />
        </div>
        <ProductsSlider products={products} />
      </div>
    </section>
  );
}

export default HotDeals;
