import ProductsPage from "@/components/productsPage/ProductsPage";
import { getFilteredOrSortedProducts } from "@/lib/faker";

async function GamingProducts({ searchParams }) {
  const { sort_by, min_price, max_price } = await searchParams;

  const products = getFilteredOrSortedProducts({
    sort_by,
    min_price,
    max_price,
  });

  return <ProductsPage products={products} />;
}

export default GamingProducts;
