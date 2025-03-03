import { faker } from "@faker-js/faker";

export function getAllProducts(count = 10) {
  faker.seed(123);
  return Array.from({ length: count }, () => {
    const images = [
      `${faker.image.url(250, 250)}?color=blue`,
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
      bestSelling: faker.number.int() % 4 === 0 ? true : false,
    };
  });
}

export function getProduct(id) {
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
