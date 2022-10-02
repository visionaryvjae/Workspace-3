import * as React from "react";
import { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PageCreated from "../components/PageCreated";

const ProfileDetails = () => {
  const navigation = useNavigation();
  const [addContainerVisible, setAddContainerVisible] = useState(false);

  const openAddContainer = useCallback(() => {
    setAddContainerVisible(true);
  }, []);

  const closeAddContainer = useCallback(() => {
    setAddContainerVisible(false);
  }, []);
  return (
    <>
      <View style={styles.profileDetailsView}>
        <Pressable
          style={styles.backPressable}
          onPress={() => navigation.navigate("CompanyDetails")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
        </Pressable>
        <Pressable style={styles.addPressable} onPress={openAddContainer}>
          <View style={styles.searchBarView} />
          <Text style={styles.createPageText}>Create page</Text>
        </Pressable>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView}>
          <View style={styles.rectangleView2} />
          <Text style={styles.text1}>+</Text>
        </View>
        <Text style={styles.addCompanyLogo}>Add Company Logo</Text>
        <View style={styles.cityView}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <Text style={styles.taglineText}>Tagline</Text>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={addContainerVisible}>
        <View style={styles.addContainerOverlay}>
          <Pressable
            style={styles.addContainerBg}
            onPress={closeAddContainer}
          />
          <PageCreated onClose={closeAddContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  addContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  addContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 6,
    backgroundColor: "#f3f3f3",
    width: 42,
    height: 38,
  },
  text: {
    position: "absolute",
    right: 16,
    bottom: 7,
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
  },
  backPressable: {
    position: "absolute",
    top: 57,
    left: 13,
    width: 42,
    height: 38,
  },
  searchBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 44,
    backgroundColor: "#0c3b2e",
    width: 273,
    height: 55,
  },
  createPageText: {
    position: "absolute",
    top: 11.22,
    left: 16.3,
    fontSize: 24,
    fontFamily: "Inter",
    color: "#d9d9d9",
    textAlign: "center",
    width: 240.4,
    height: 33.67,
  },
  addPressable: {
    position: "absolute",
    top: 807,
    left: 78,
    width: 273,
    height: 55,
  },
  rectangleView1: {
    position: "absolute",
    top: 193,
    right: 27,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 100,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  text1: {
    position: "absolute",
    top: 7,
    left: 15,
    fontSize: 30,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "left",
  },
  groupView: {
    position: "absolute",
    top: 217,
    left: 47,
    width: 50,
    height: 50,
  },
  addCompanyLogo: {
    position: "absolute",
    top: 226,
    left: 120,
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "rgba(12, 59, 46, 0.7)",
    textAlign: "left",
    width: 286,
    height: 32,
  },
  rectangleView3: {
    position: "absolute",
    top: 13,
    right: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "rgba(12, 59, 46, 0.7)",
    borderWidth: 1,
    width: 379,
    height: 57,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 16,
    backgroundColor: "#fff",
    width: 80,
    height: 25,
  },
  taglineText: {
    position: "absolute",
    top: 0,
    left: 23,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
  },
  cityView: {
    position: "absolute",
    top: 327,
    right: 25,
    width: 379,
    height: 70,
  },
  profileDetailsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default ProfileDetails;
