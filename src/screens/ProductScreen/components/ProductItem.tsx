import React, { useCallback, useMemo, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Product } from "../../../services/Products/ProductsPayload";
import { Pallet } from "../../../theme/theme";
import Icon from "../../../components/IconManager/IconManager";
import { formatBRL } from "../../../utils/formatBRL";

type Props = {
  item: Product;
  onToggle: (id: number) => void;
  favorited: boolean;
};

const ProductItem: React.FC<Props> = ({ item, onToggle, favorited }) => {
  const [showComment, setShowComment] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.rateText}>({item.rating.rate.toFixed(1)})</Text>
        </View>

        <Text style={styles.price}>{formatBRL(item.price)}</Text>

        <Pressable
          onPress={() => setShowComment((s) => !s)}
          accessibilityRole="button"
          accessibilityLabel={
            showComment ? "Ocultar comentário" : "Ver comentário"
          }
          style={styles.commentButton}
        >
          <Text style={styles.commentButtonText}>
            {showComment ? "Ocultar comentário" : "Ver comentário"}
          </Text>
        </Pressable>

        {showComment && (
          <Text style={styles.comment}>{item.rating.topComment}</Text>
        )}
      </View>

      <Pressable
        onPress={() => onToggle(item.id)}
        accessibilityRole="button"
        accessibilityLabel={
          favorited ? "Desfavoritar produto" : "Favoritar produto"
        }
        style={styles.favoriteButton}
      >
        <Icon
          height={32}
          width={28}
          primary={Pallet.colors.Purple.Purple500}
          source={favorited ? "favoritedHeart" : "heart"}
        />
      </Pressable>
    </View>
  );
};

export default React.memo(ProductItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Pallet.colors.neutrals.Neutrals200,
    alignItems: "flex-start",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
  },

  rateText: {
    fontSize: 12,
    marginLeft: 4,
    color: Pallet.colors.text.t700,
  },
  price: {
    fontSize: 14,
    marginBottom: 4,
  },
  commentButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
    backgroundColor: Pallet.colors.Purple.Purple700,
    borderRadius: 4,
    marginBottom: 4,
  },
  commentButtonText: {
    fontSize: 12,
    color: Pallet.colors.mono,
  },
  comment: {
    fontSize: 14,
    color: Pallet.colors.text.t700,
    paddingLeft: 4,
  },
  favoriteButton: {
    padding: 8,
    marginLeft: 8,
  },
});
