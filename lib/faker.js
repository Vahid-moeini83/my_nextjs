import { faker } from "@faker-js/faker";

export function getAllProducts(count = 10) {
  faker.seed(123);
  return Array.from({ length: count }, () => {
    const images = [
      `${faker.image.url(250, 250)}?color=green`,
      `${faker.image.url(250, 250)}?color=blue`,
      `${faker.image.url(250, 250)}?color=red`,
    ];

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      discount: faker.number.int({ min: 0, max: 10 }),
      price: faker.number.int({ min: 20, max: 200 }),
      image: images,
      colors: [faker.color.human(), faker.color.human()],
      isFeatured: faker.number.int() % 3 === 0 ? true : false,
      bestSelling: faker.number.int() % 2 === 0 ? true : false,
    };
  });
}

export function getProductById(id) {
  const products = getAllProducts();
  const product = products.find((product) => product.id === id);

  return product;
}

export function getIsFeaturedProducts() {
  const allProducts = getAllProducts();
  const isFeaturedProducts = allProducts.filter(
    (product) => product.isFeatured
  );

  return isFeaturedProducts;
}

export function getBestSellingProducts() {
  const allProducts = getAllProducts();
  const bestSellingProducts = allProducts.filter(
    (product) => product.bestSelling
  );

  return bestSellingProducts;
}

export function getDiscountedProducts() {
  const allProducts = getAllProducts();
  const discountedProducts = allProducts.filter(
    (product) => product.discount > 0
  );

  return discountedProducts;
}

export function getFilteredOrSortedProducts({ sort_by, min_price, max_price }) {
  let products = getAllProducts();

  if (min_price)
    products = products.filter((product) => product.price >= Number(min_price));

  if (max_price)
    products = products.filter((product) => product.price <= Number(max_price));

  switch (sort_by) {
    case "featured":
      products = products.filter((product) => product.isFeatured);
      break;

    case "bestSelling":
      products = products.filter((product) => product.bestSelling);
      break;

    case "alphabetical-asc":
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case "alphabetical-dec":
      products.sort((a, b) => b.name.localeCompare(a.name));
      break;

    case "price-asc":
      products.sort((a, b) => a.price - b.price);
      break;

    case "price-dec":
      products.sort((a, b) => b.price - a.price);
      break;

    default:
      products = products;
      break;
  }

  return products;
}
