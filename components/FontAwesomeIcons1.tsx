import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type FontAwesomeIcons1Type = {
  style?: StyleProp<ViewStyle>;
};

const FontAwesomeIcons1 = ({ style }: FontAwesomeIcons1Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.fontAwesomeIcons, style]}
      onPress={() => navigation.navigate("Favourites")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons62.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    overflow: "hidden",
  },
  fontAwesomeIcons: {
    position: "relative",
  },
});

export default FontAwesomeIcons1;
