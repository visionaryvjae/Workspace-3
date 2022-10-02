import React from "react";
import { Image, StyleSheet } from "react-native";

const IndLandingPage = () => {
  return (
    <Image
      style={styles.indLandingPage}
      resizeMode="cover"
      source={require("../assets/ind-landing-page.png")}
    />
  );
};

const styles = StyleSheet.create({
  indLandingPage: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 886,
    overflow: "hidden",
  },
});

export default IndLandingPage;
