import PagePath from "./PagePath";
import PeopleProductsSlider from "./PeopleProductsSlider";
import Product from "./Product";
import ProductToggleTabs from "./ProductToggleTabs";
import RecentProductsSlider from "./RecentProductsSlider";

function ProductPage({ product }) {
  const { id, name, discount, price, image, colors, isFeatured, bestSelling } =
    product;

  return (
    <div className="container">
      <PagePath productName={name} />
      <Product
        image={image}
        name={name}
        price={price}
        discount={discount}
        colors={colors}
      />
      <ProductToggleTabs colors={colors} />
      <PeopleProductsSlider />
      <RecentProductsSlider />
    </div>
  );
}

export default ProductPage;
