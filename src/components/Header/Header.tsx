import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Pallet } from "../../theme/theme";
import userImage from "../../assets/user/gabriel.jpg";
import Logo from "../LogoManager/LogoManager";
import Icon from "../IconManager/IconManager";

export default function Header() {
  return (
    <View style={styles.container}>
      <Icon
        height={32}
        width={28}
        primary={Pallet.colors.Purple.Purple500}
        source="drawer"
      />
      <Logo
        height={40}
        width={32}
        primary={Pallet.colors.Purple.Purple500}
        source="baseLogo"
      />
      <Image source={userImage} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: Pallet.colors.mono,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#ccc",
  },
  logo: {
    marginHorizontal: 16,
    borderWidth: 1,
  },
  iconButton: {
    padding: 8,
  },
});
