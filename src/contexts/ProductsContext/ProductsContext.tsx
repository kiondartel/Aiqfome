import React, { createContext, useState, useEffect } from "react";
import { Product } from "../../services/Products/ProductsPayload";
import { getProducts } from "../../services/Products/ProductsService";

export const ProductsContext = createContext<{
  products: Product[];
  loading: boolean;
  refresh: () => void;
}>({
  products: [],
  loading: false,
  refresh: () => {},
});

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, refresh: fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
