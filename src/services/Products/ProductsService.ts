import productsData from "../../utils/mocks/products.json";
import { Product } from "./ProductsPayload";

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productsData), 500);
  });
}
