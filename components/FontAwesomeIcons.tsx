import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type FontAwesomeIconsType = {
  style?: StyleProp<ViewStyle>;
};

const FontAwesomeIcons = ({ style }: FontAwesomeIconsType) => {
  return (
    <Image
      style={[styles.fontAwesomeIcons, style]}
      resizeMode="cover"
      source={require("../assets/fontawesome--icons12.png")}
    />
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons: {
    position: "relative",
    width: 35,
    height: 35.26,
    overflow: "hidden",
  },
});

export default FontAwesomeIcons;
