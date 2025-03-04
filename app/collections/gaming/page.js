import ProductImage from "@/components/ui/ProductImage";
import { getAllProducts } from "@/lib/faker";
import Link from "next/link";

function GamingProducts() {
  const products = getAllProducts();

  if (!products || products.length === 0) return <p>No products yet!</p>;

  return (
    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
      {products?.map((product) => (
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "40px",
          }}
          key={product.id}
        >
          <Link href={`/collections/gaming/${product.id}`}>{product.name}</Link>
          {`$${product.price}`}
          <ProductImage
            src={product.image[1]}
            width={250}
            height={250}
            alt={product.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default GamingProducts;
