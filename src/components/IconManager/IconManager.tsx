import React from "react";
import Drawer from "../../assets/Icons/Drawer";
import { SourceProp } from "../../types/Source";
import Heart from "../../assets/Icons/Heart";
import FavoritedHeart from "../../assets/Icons/FavoritedHeart";

const ICON_MAP = {
  drawer: Drawer,
  heart: Heart,
  favoritedHeart: FavoritedHeart,
};

export type IconSource = keyof typeof ICON_MAP;
type IconProp = { source: IconSource } & SourceProp;

const Icon = ({ source, height, width, primary }: IconProp) => {
  const Source = ICON_MAP[source];

  return <Source height={height} width={width} primary={primary} />;
};

export default Icon;
