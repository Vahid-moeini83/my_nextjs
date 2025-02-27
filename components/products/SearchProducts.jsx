import classes from "./searchProducts.module.css";
import ProductImage from "../ui/ProductImage";
import { formatPrice } from "@/utils/helpers";
import Link from "next/link";

function SearchProducts({ products }) {
  return (
    <ul className={classes.products}>
      {products?.map((product) => (
        <li key={product.id}>
          <Link href="#">
            <ProductImage
              src={product.image[2]}
              width={60}
              height={84}
              alt="Image"
            />
          </Link>
          <div className={classes.details}>
            <Link href="#" className={classes.name}>{product.name}</Link>
            <div>
              <span className={classes.real}>{formatPrice(product.price)}</span>
              <span className={classes.final}>
                {formatPrice(
                  product.price - product.price * (product.discount / 100)
                )}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchProducts;
