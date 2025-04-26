import React, { useCallback, useMemo, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Product } from "../../../services/Products/ProductsPayload";
import { Pallet } from "../../../theme/theme";
import Icon from "../../../components/IconManager/IconManager";
import { formatBRL } from "../../../utils/formatBRL";
import {
  moderateScale,
  scaleFont,
  scaleVertical,
} from "../../../utils/responsive";

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
            {showComment ? "Ocultar comentários" : "Ver comentários"}
          </Text>
        </Pressable>

        {showComment && (
          <View style={styles.ratingContainer}>
            <Icon
              height={30}
              width={23}
              primary={Pallet.colors.Purple.Purple500}
              source="user"
            />
            <Text style={styles.comment}>{item.rating.topComment}</Text>
          </View>
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
    paddingVertical: scaleVertical(12),
    borderBottomWidth: 1,
    borderColor: Pallet.colors.neutrals.Neutrals200,
    alignItems: "flex-start",
  },
  image: {
    width: moderateScale(64),
    height: moderateScale(64),
    borderRadius: moderateScale(8),
    marginRight: moderateScale(12),
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
    fontSize: scaleFont(16),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rateText: {
    fontSize: scaleFont(12),
    marginLeft: moderateScale(4),
    color: Pallet.colors.text.t700,
  },
  price: {
    fontSize: scaleFont(14),
    marginBottom: scaleVertical(5),
    color: Pallet.colors.text.t700,
  },
  commentButton: {
    paddingVertical: scaleVertical(4),
    paddingHorizontal: moderateScale(8),
    alignSelf: "flex-start",
    backgroundColor: Pallet.colors.Purple.Purple700,
    borderRadius: moderateScale(4),
    marginBottom: scaleVertical(4),
  },
  commentButtonText: {
    fontSize: scaleFont(12),
    color: Pallet.colors.mono,
  },
  comment: {
    fontSize: scaleFont(14),
    color: Pallet.colors.text.t700,
    paddingLeft: moderateScale(4),
    lineHeight: scaleFont(18),
  },
  favoriteButton: {
    padding: moderateScale(8),
    marginLeft: moderateScale(8),
  },
});
