import ProductPage from "@/components/singlePage/ProductPage";
import { getProductById } from "@/lib/faker";

async function ProductSinglePage({ params }) {
  const product = getProductById(params.productId);

  return <ProductPage product={product} />;
}

export default ProductSinglePage;
