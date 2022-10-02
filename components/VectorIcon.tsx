import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type VectorIconType = {
  style?: StyleProp<ViewStyle>;
};

const VectorIcon = ({ style }: VectorIconType) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      resizeMode="cover"
      source={require("../assets/vector.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 33.91,
    height: 34.2,
  },
});

export default VectorIcon;
