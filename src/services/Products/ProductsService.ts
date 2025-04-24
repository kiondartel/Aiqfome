import { products } from "../../utils/mocks/products";
import { Product } from "./ProductsPayload";

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}
