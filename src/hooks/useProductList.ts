import { useContext, useState, useCallback, useMemo } from "react";
import { ProductsContext } from "../contexts/ProductsContext/ProductsContext";
import type { Product } from "../services/Products/ProductsPayload";
import useDebounce from "./useDebounce";

const useProductList = () => {
  const { products, favorites, loading, toggleFavorite, isFavorite } =
    useContext(ProductsContext);

  const [showFavs, setShowFavs] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedQuery = useDebounce(searchQuery, 300);

  const toggleShowFavs = useCallback(() => {
    setShowFavs((f) => !f);
  }, []);

  const displayed = useMemo<Product[]>(() => {
    const base = showFavs
      ? products.filter((p) => favorites.includes(p.id))
      : products;

    if (!debouncedQuery.trim()) {
      return base;
    }

    const q = debouncedQuery.trim().toLowerCase();
    return base.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, favorites, showFavs, debouncedQuery]);

  return {
    displayed,
    loading,
    toggleFavorite,
    isFavorite,
    showFavs,
    toggleShowFavs,
    searchQuery,
    setSearchQuery,
  };
};

export default useProductList;
