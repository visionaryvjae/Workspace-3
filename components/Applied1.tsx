import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

type Applied1Type = {
  onClose?: () => void;
};

const Applied1 = ({ onClose }: Applied1Type) => {
  return (
    <View style={styles.appliedView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Image
            style={styles.fontAwesomeIcons}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons24.png")}
          />
          <Text style={styles.withdrawalSuccessfulText}>
            <Text style={styles.withdrawalSuccessfulTxtContainer}>
              <Text style={styles.withdrawalText}>Withdrawal</Text>
              <Text style={styles.successfulText}>successful</Text>
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff",
    width: 428,
    height: 800,
  },
  fontAwesomeIcons: {
    position: "absolute",
    top: 262,
    left: 139,
    width: 150,
    height: 150,
    overflow: "hidden",
  },
  withdrawalText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  successfulText: {
    margin: 0,
  },
  withdrawalSuccessfulTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  withdrawalSuccessfulText: {
    position: "absolute",
    top: 423,
    left: 112,
    fontSize: 18,
    letterSpacing: 3.6,
    textTransform: "uppercase",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 204,
    height: 36,
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 800,
  },
  appliedView: {
    position: "relative",
    width: 428,
    height: 800,
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Applied1;
