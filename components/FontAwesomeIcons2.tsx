import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type FontAwesomeIcons2Type = {
  style?: StyleProp<ViewStyle>;
};

const FontAwesomeIcons2 = ({ style }: FontAwesomeIcons2Type) => {
  return (
    <Image
      style={[styles.fontAwesomeIcons, style]}
      resizeMode="cover"
      source={require("../assets/fontawesome--icons69.png")}
    />
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons: {
    position: "relative",
    width: 35,
    height: 35.3,
    overflow: "hidden",
  },
});

export default FontAwesomeIcons2;
