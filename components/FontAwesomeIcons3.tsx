import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type FontAwesomeIcons3Type = {
  style?: StyleProp<ViewStyle>;
};

const FontAwesomeIcons3 = ({ style }: FontAwesomeIcons3Type) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.fontAwesomeIcons, style]}
      onPress={() => navigation.navigate("Profile1")}
    >
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/fontawesome--icons70.png")}
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

export default FontAwesomeIcons3;
