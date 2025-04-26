import { Dimensions, ScaledSize } from "react-native";

const { width, height }: ScaledSize = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scaleHorizontal = (size: number) => (width / guidelineBaseWidth) * size;
const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scaleHorizontal(size) - size) * factor;
const scaleFont = (size: number) => {
  const scaledSize = size * (width / guidelineBaseWidth);
  return Math.round(scaledSize);
};
export { scaleHorizontal, scaleVertical, moderateScale, scaleFont };
