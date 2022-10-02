import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

type BioEditType = {
  onClose?: () => void;
};

const BioEdit = ({ onClose }: BioEditType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.bioEditView}>
      <View style={styles.rectangleView} />
      <View style={styles.biographyView}>
        <Text style={styles.biographyText}>Biography</Text>
        <Text style={styles.loremIpsumDolorSitAmetCo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar sit amet sem vel hendrerit. Suspendisse vehicula dui a elit
          accumsan, eget imperdiet nibh accumsan. Suspendisse iaculis ex nec
          efficitur sodales. Curabitur vel commodo neque, sit amet volutpat
          sapien. Maecenas quam velit, facilisis vel posuere eget, consectetur
          vel justo. Duis finibus risus ac est faucibus cursus. Sed non massa
          ultrices, suscipit nunc ut, vulputate justo. Etiam venenatis odio vel
          tellus maximus rhoncus. In pharetra orci non ultricies auctor.
          Pellentesque lobortis null
        </Text>
      </View>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("Frame5")}
      >
        <View style={styles.searchBarView} />
        <Text style={styles.oKText}>OK</Text>
      </Pressable>
      <Pressable
        style={styles.xPressable}
        onPress={() => navigation.navigate("ProfileEdit")}
      >
        <Text style={styles.xText}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 56,
    left: 19,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 373,
    height: 382,
  },
  biographyText: {
    position: "absolute",
    top: 0,
    left: 133,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 90,
    height: 23.47,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 40.14,
    left: 0,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 364,
    height: 368.02,
  },
  biographyView: {
    position: "absolute",
    top: 23,
    left: 28,
    width: 364,
    height: 408.15,
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 126,
    height: 55,
  },
  oKText: {
    position: "absolute",
    top: 11.22,
    left: 7.52,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 110.96,
    height: 33.67,
  },
  signUpPressable: {
    position: "absolute",
    top: 452,
    left: 266,
    width: 126,
    height: 55,
  },
  xText: {
    fontSize: 18,
    fontFamily: "Arial",
    color: "#0c3b2e",
    textAlign: "left",
    width: 25,
    height: 23,
  },
  xPressable: {
    position: "absolute",
    left: 385,
    top: 18,
  },
  bioEditView: {
    position: "relative",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#d1d5db",
    borderWidth: 1,
    width: 420,
    height: 526,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default BioEdit;
