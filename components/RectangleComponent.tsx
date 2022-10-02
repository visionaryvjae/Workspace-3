import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type RectangleComponentType = {
  style?: StyleProp<ViewStyle>;
};

const RectangleComponent = ({ style }: RectangleComponentType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectanglePressable, style]}
      onPress={() => navigation.navigate("false")}
    />
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "relative",
    backgroundColor: "#fff",
    width: 195,
    height: 54,
  },
});

export default RectangleComponent;
