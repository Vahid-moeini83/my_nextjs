import classes from "./sidebarSearch.module.css";
import SearchBox from "./SearchBox";
import { IoClose } from "react-icons/io5";
import { categories } from "@/utils/data";
import Link from "next/link";
import SearchProducts from "@/components/products/SearchProducts";
import { getProducts } from "@/lib/faker";

function SidebarSearch({ isOpen, onClose }) {
  const products = getProducts(5);

  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes.open : classes.close}`}
    >
      <div className={classes.header}>
        <div className={classes.title}>
          <div>
            <h2>Search our site</h2>
            <IoClose color="black" size={24} onClick={onClose} />
          </div>
          <SearchBox />
        </div>
        <div className={classes.main}>
          <div className={classes.links}>
            <h3>Quick link</h3>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href="#">{category.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.products}>
            <SearchProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSearch;
