import { getProduct } from "@/lib/faker";
import Image from "next/image";

async function ProductSinglePage({ params }) {
  const product = getProduct(params.productId);

  return (
    <div style={{ height: "100vh" }}>
      {product.name}
      <Image src={product.image[1]} width={404} height={404} alt={product.name} />
    </div>
  );
}

export default ProductSinglePage;
