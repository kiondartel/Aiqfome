import React, { createContext, useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../../services/Products/ProductsPayload";
import { getProducts } from "../../services/Products/ProductsService";
import { useNotifications } from "../../hooks/useNotifications";

type ContextType = {
  products: Product[];
  favorites: number[];
  loading: boolean;
  refresh: () => void;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const ProductsContext = createContext<ContextType>({
  products: [],
  favorites: [],
  loading: false,
  refresh: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
});

const FAVORITES_KEY = "@myapp:favorites";

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const { scheduleDailySummary } = useNotifications();

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

  const loadFavorites = async () => {
    const favString = await AsyncStorage.getItem(FAVORITES_KEY);
    if (favString) setFavorites(JSON.parse(favString));
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const isFavorite = useCallback(
    (id: number) => favorites.includes(id),
    [favorites]
  );

  useEffect(() => {
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    fetchProducts();
    loadFavorites();
  }, []);

  useEffect(() => {
    if (!loading) {
      scheduleDailySummary(favorites.length);
    }
  }, [loading]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        favorites,
        loading,
        refresh: fetchProducts,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
