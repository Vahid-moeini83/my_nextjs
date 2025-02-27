import { faker } from "@faker-js/faker";

export function getProducts(count = 9) {
  faker.seed(123);
  return Array.from({ length: count }, () => {
    const baseImageUrl = faker.image.urlLoremFlickr({
      category: "gaming",
      width: 250,
      height: 250,
    });
    const images = [
      baseImageUrl,
      `${faker.image.url(250, 250)}?color=blue`,
      `${faker.image.url(250, 250)}?color=red`,
    ];

    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      discount: faker.number.int({ min: 0, max: 10 }),
      price: faker.number.int({ min: 20, max: 200 }),
      image: images,
      isFeatured: count % 3 === 0 ? true : false,
      bestSelling: count % 4 === 0 ? true : false,
    };
  });
}
