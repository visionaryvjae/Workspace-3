import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type FontAwesomeIcons4Type = {
  style?: StyleProp<ViewStyle>;
};

const FontAwesomeIcons4 = ({ style }: FontAwesomeIcons4Type) => {
  return (
    <Image
      style={[styles.fontAwesomeIcons, style]}
      resizeMode="cover"
      source={require("../assets/fontawesome--icons71.png")}
    />
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons: {
    position: "relative",
    width: 30,
    height: 30.23,
    overflow: "hidden",
  },
});

export default FontAwesomeIcons4;
