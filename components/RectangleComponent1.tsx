import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

type RectangleComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const RectangleComponent1 = ({ style }: RectangleComponent1Type) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    width: 195,
    height: 56,
  },
});

export default RectangleComponent1;
