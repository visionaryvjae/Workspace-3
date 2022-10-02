import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Text, Pressable, Modal, View } from "react-native";
import ProfileEdit1 from "../components/ProfileEdit1";
import BioEdit from "../components/BioEdit";
import WHEdit from "../components/WHEdit";
import EHEdit1 from "../components/EHEdit1";
import EHEdit from "../components/EHEdit";
import LangEdit from "../components/LangEdit";
import { useNavigation } from "@react-navigation/native";
import FrameScreen from "../components/Frame5";

const ProfileEdit = () => {
  const [editIconVisible, setEditIconVisible] = useState(false);
  const [editIcon1Visible, setEditIcon1Visible] = useState(false);
  const [editIcon2Visible, setEditIcon2Visible] = useState(false);
  const [editIcon3Visible, setEditIcon3Visible] = useState(false);
  const [editIcon4Visible, setEditIcon4Visible] = useState(false);
  const [editIcon5Visible, setEditIcon5Visible] = useState(false);
  const navigation = useNavigation();

  const openEditIcon = useCallback(() => {
    setEditIconVisible(true);
  }, []);

  const closeEditIcon = useCallback(() => {
    setEditIconVisible(false);
  }, []);

  const openEditIcon1 = useCallback(() => {
    setEditIcon1Visible(true);
  }, []);

  const closeEditIcon1 = useCallback(() => {
    setEditIcon1Visible(false);
  }, []);

  const openEditIcon2 = useCallback(() => {
    setEditIcon2Visible(true);
  }, []);

  const closeEditIcon2 = useCallback(() => {
    setEditIcon2Visible(false);
  }, []);

  const openEditIcon3 = useCallback(() => {
    setEditIcon3Visible(true);
  }, []);

  const closeEditIcon3 = useCallback(() => {
    setEditIcon3Visible(false);
  }, []);

  const openEditIcon4 = useCallback(() => {
    setEditIcon4Visible(true);
  }, []);

  const closeEditIcon4 = useCallback(() => {
    setEditIcon4Visible(false);
  }, []);

  const openEditIcon5 = useCallback(() => {
    setEditIcon5Visible(true);
  }, []);

  const closeEditIcon5 = useCallback(() => {
    setEditIcon5Visible(false);
  }, []);
  return (
    <>
      <View style={styles.profileEditView}>
        <Image
          style={styles.fontAwesomeIcons}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons19.png")}
        />
        <Image
          style={styles.fontAwesomeIcons1}
          resizeMode="cover"
          source={require("../assets/fontawesome--icons19.png")}
        />
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-22.png")}
        />
        <Text style={styles.johnDoeText}>John Doe</Text>
        <Text style={styles.qualificationTitleText}>Qualification/Title</Text>
        <Text style={styles.yourRateR400hr}>Your rate: R400/hr</Text>
        <Pressable style={styles.editPressable} onPress={openEditIcon}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/edit5.png")}
          />
        </Pressable>
        <FrameScreen />
        <Pressable
          style={styles.groupPressable}
          onPress={() => navigation.navigate("IndividualSettings")}
        >
          <View style={styles.rectangleView} />
          <Text style={styles.text}>{`<`}</Text>
          <Text style={styles.text1}>{`<`}</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={editIconVisible}>
        <View style={styles.editIconOverlay}>
          <Pressable style={styles.editIconBg} onPress={closeEditIcon} />
          <ProfileEdit1 onClose={closeEditIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon1Visible}>
        <View style={styles.editIcon1Overlay}>
          <Pressable style={styles.editIcon1Bg} onPress={closeEditIcon1} />
          <BioEdit onClose={closeEditIcon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon2Visible}>
        <View style={styles.editIcon2Overlay}>
          <Pressable style={styles.editIcon2Bg} onPress={closeEditIcon2} />
          <WHEdit onClose={closeEditIcon2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon3Visible}>
        <View style={styles.editIcon3Overlay}>
          <Pressable style={styles.editIcon3Bg} onPress={closeEditIcon3} />
          <EHEdit1 onClose={closeEditIcon3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon4Visible}>
        <View style={styles.editIcon4Overlay}>
          <Pressable style={styles.editIcon4Bg} onPress={closeEditIcon4} />
          <EHEdit onClose={closeEditIcon4} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon5Visible}>
        <View style={styles.editIcon5Overlay}>
          <Pressable style={styles.editIcon5Bg} onPress={closeEditIcon5} />
          <LangEdit onClose={closeEditIcon5} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  editIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  editIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  editIcon2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIcon2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  editIcon3Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIcon3Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  editIcon4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIcon4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  editIcon5Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  editIcon5Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  fontAwesomeIcons: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fontAwesomeIcons1: {
    position: "absolute",
    height: "4.38%",
    width: "8.79%",
    top: "93.5%",
    right: "25.38%",
    bottom: "2.12%",
    left: "65.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  ellipseIcon: {
    position: "absolute",
    height: "14.58%",
    width: "31.54%",
    top: "10.8%",
    right: "34.35%",
    bottom: "74.62%",
    left: "34.11%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  johnDoeText: {
    position: "absolute",
    height: "4.32%",
    width: "46.03%",
    top: "26.67%",
    right: "27.1%",
    bottom: "69.01%",
    left: "26.87%",
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  qualificationTitleText: {
    position: "absolute",
    height: "2.59%",
    width: "46.73%",
    top: "30.99%",
    right: "26.64%",
    bottom: "66.41%",
    left: "26.64%",
    fontSize: 20,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  yourRateR400hr: {
    position: "absolute",
    height: "2.38%",
    width: "36.68%",
    top: "33.59%",
    right: "31.78%",
    bottom: "64.04%",
    left: "31.54%",
    fontSize: 18,
    fontFamily: "Inter",
    color: "rgba(109, 151, 115, 0.63)",
    textAlign: "left",
  },
  icon: {
    width: 30,
    height: 32,
  },
  editPressable: {
    position: "absolute",
    left: 271,
    top: 84,
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 6,
    backgroundColor: "rgba(245, 245, 245, 0.3)",
  },
  text: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    position: "absolute",
    height: "81.58%",
    width: "26.19%",
    top: "0%",
    right: "38.1%",
    bottom: "18.42%",
    left: "35.71%",
    fontSize: 24,
    fontFamily: "Inika",
    color: "#000",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  groupPressable: {
    position: "absolute",
    height: "4.1%",
    width: "9.81%",
    top: "6.16%",
    right: "86.92%",
    bottom: "89.74%",
    left: "3.27%",
  },
  profileEditView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 934,
    overflow: "hidden",
  },
});

export default ProfileEdit;
