import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { images } from "../../../constants/imageAssets";
import { Pallet } from "../../../theme/theme";

const foodTypes = [
  { id: 1, name: "Massas", image: images.pizza },
  { id: 2, name: "Doces", image: images.acai },
  { id: 3, name: "Carnes", image: images.frango },
  { id: 4, name: "Fast-food", image: images.burger },
  { id: 5, name: "Saladas", image: images.salada },
  { id: 6, name: "Japonesa", image: images.sushi },
  { id: 7, name: "Mexicana", image: images.tacos },
];

export const CategoryCarousel: React.FC<{
  onSelect?: (typeName: string) => void;
}> = ({ onSelect }) => {
  const { width } = useWindowDimensions();
  const imageSize = width * 0.14;

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
      >
        {foodTypes.map((type) => (
          <TouchableOpacity
            key={type.id.toString()}
            style={styles.categoryItem}
            onPress={() => onSelect?.(type.name)}
          >
            <Image
              source={type.image}
              style={{
                width: imageSize,
                height: imageSize,
                borderRadius: imageSize / 2,
                marginBottom: 4,
              }}
            />
            <Text style={styles.categoryText}>{type.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 100,
    marginTop: 16,
    backgroundColor: Pallet.colors.Purple.Purple500,
  },
  carouselContent: {
    paddingHorizontal: 5,
    alignItems: "center",
  },
  categoryItem: {
    marginRight: 12,
    alignItems: "center",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    color: Pallet.colors.mono,
  },
});

export default CategoryCarousel;
