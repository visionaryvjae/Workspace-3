import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type VectorIcon1Type = {
  style?: StyleProp<ViewStyle>;
};

const VectorIcon1 = ({ style }: VectorIcon1Type) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      resizeMode="cover"
      source={require("../assets/vector1.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "relative",
    width: 26.25,
    height: 30.26,
  },
});

export default VectorIcon1;
