import React, { useCallback } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import useProductList from "../../hooks/useProductList";

import { Pallet } from "../../theme/theme";
import { TextInput } from "react-native-gesture-handler";
import { Product } from "../../services/Products/ProductsPayload";
import ProductItem from "./components/ProductItem";
import CategoryCarousel from "./components/CategoryCarousel";
import { moderateScale, scaleVertical } from "../../utils/responsive";

export const ProductScreen: React.FC = () => {
  const {
    displayed,
    loading,
    toggleFavorite,
    isFavorite,
    searchQuery,
    setSearchQuery,
    showFavs,
    toggleShowFavs,
  } = useProductList();

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItem
        item={item}
        onToggle={toggleFavorite}
        favorited={isFavorite(item.id)}
      />
    ),
    [isFavorite, toggleFavorite]
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Spinner />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <CategoryCarousel />
      </View>
      <View style={styles.filterBar}>
        <TouchableOpacity
          onPress={toggleShowFavs}
          style={[styles.btn, showFavs && styles.btnPurple]}
        >
          <Text style={[styles.btnText, showFavs && styles.btnPurple]}>
            {showFavs ? "Ver todos" : "Ver favoritos"}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={displayed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: moderateScale(12),
  },
  searchContainer: {
    paddingHorizontal: moderateScale(16),
    paddingVertical: scaleVertical(8),
    backgroundColor: Pallet.colors.Purple.Purple500,
  },
  searchInput: {
    height: scaleVertical(40),
    borderRadius: moderateScale(8),
    borderWidth: 1,
    borderColor: Pallet.colors.mono,
    backgroundColor: Pallet.colors.mono,
    paddingHorizontal: moderateScale(12),
    fontSize: moderateScale(14),
  },
  btn: {
    backgroundColor: Pallet.colors.mono,
    borderWidth: 1,
    borderColor: Pallet.colors.neutrals.Neutrals400,
    paddingVertical: scaleVertical(8),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(20),
    alignSelf: "flex-end",
    marginVertical: scaleVertical(5),
  },
  btnPurple: {
    backgroundColor: Pallet.colors.Purple.Purple500,
    borderColor: Pallet.colors.mono,
  },
  btnText: {
    color: Pallet.colors.text.t700,
    fontSize: moderateScale(14),
  },
  btnTextPurple: {
    color: Pallet.colors.mono,
  },
  list: {
    paddingHorizontal: moderateScale(12),
  },
});
export default ProductScreen;
