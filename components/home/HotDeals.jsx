import { getAllProducts } from "@/lib/faker";
import SectionTitle from "../ui/SectionTitle";
import classes from "./hotDeals.module.css";
import HotDealsTimer from "./HotDealsTimer";
import HotDealsSlider from "./HotDealsSlider";

function HotDeals() {
  const products = getAllProducts();

  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.header}>
          <SectionTitle title="Hot Deals" />
          <HotDealsTimer targetDate="2025-04-01T00:00:00" />
        </div>
        <HotDealsSlider products={products} />
      </div>
    </section>
  );
}

export default HotDeals;
