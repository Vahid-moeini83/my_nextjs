import classes from "./searchProducts.module.css";
import ProductImage from "../ui/ProductImage";
import Link from "next/link";
import ProductPrice from "./ProductPrice";

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
            <Link href="#" className={classes.name}>
              {product.name}
            </Link>
            <ProductPrice price={product.price} discount={product.discount} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SearchProducts;
