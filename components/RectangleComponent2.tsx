import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

type RectangleComponent2Type = {
  style?: StyleProp<ViewStyle>;
};

const RectangleComponent2 = ({ style }: RectangleComponent2Type) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#0c3b2e",
    borderTopWidth: 3,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    width: 428,
    height: 72,
  },
});

export default RectangleComponent2;
