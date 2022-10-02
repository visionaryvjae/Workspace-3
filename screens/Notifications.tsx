import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationsView}>
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
      <Text style={styles.notificationsText}>Notifications</Text>
      <View style={styles.jobComponentView}>
        <View style={styles.rectangleView} />
        <View style={styles.companyIconView} />
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector-129.png")}
        />
        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.messageText}>Message</Text>
      </View>
      <Pressable
        style={styles.jobComponentPressable1}
        onPress={() => navigation.navigate("JobDescription")}
      >
        <View style={styles.rectangleView1} />
        <View style={styles.companyIconView1} />
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector-129.png")}
        />
        <Text style={styles.titleText1}>Title</Text>
        <Text style={styles.messageText1}>Message</Text>
        <Pressable
          style={styles.jobComponentPressable}
          onPress={() => navigation.navigate("JobDescription")}
        >
          <View style={styles.rectangleView2} />
          <View style={styles.companyIconView2} />
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector-129.png")}
          />
          <Text style={styles.titleText2}>Title</Text>
          <Text style={styles.messageText2}>Message</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  notificationsText: {
    position: "absolute",
    height: "3.89%",
    width: "42.76%",
    top: "7.56%",
    right: "24.77%",
    bottom: "88.55%",
    left: "32.48%",
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView: {
    position: "absolute",
    height: "58.48%",
    width: "13.61%",
    top: "21.05%",
    right: "82.05%",
    bottom: "20.47%",
    left: "4.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "153.64%",
    right: "82.29%",
    bottom: "-112.99%",
    left: "4.1%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  titleText: {
    position: "absolute",
    height: "46.23%",
    width: "25.33%",
    top: "27%",
    right: "50.61%",
    bottom: "26.77%",
    left: "24.07%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  messageText: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "56.63%",
    right: "53.98%",
    bottom: "26.68%",
    left: "24.07%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  jobComponentView: {
    position: "absolute",
    height: "10.8%",
    width: "100%",
    top: "14.25%",
    right: "0%",
    bottom: "74.95%",
    left: "0%",
  },
  rectangleView1: {
    position: "absolute",
    height: "50%",
    width: "99.77%",
    top: "0%",
    right: "0.23%",
    bottom: "50%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView1: {
    position: "absolute",
    height: "29.24%",
    width: "13.58%",
    top: "10.53%",
    right: "82.09%",
    bottom: "60.23%",
    left: "4.33%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon1: {
    position: "absolute",
    height: "29.68%",
    width: "13.58%",
    top: "126.82%",
    right: "82.33%",
    bottom: "-56.5%",
    left: "4.09%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  titleText1: {
    position: "absolute",
    height: "23.11%",
    width: "25.27%",
    top: "13.5%",
    right: "50.72%",
    bottom: "63.39%",
    left: "24.01%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  messageText1: {
    position: "absolute",
    height: "8.35%",
    width: "21.91%",
    top: "28.31%",
    right: "54.08%",
    bottom: "63.34%",
    left: "24.01%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
  },
  companyIconView2: {
    position: "absolute",
    height: "58.48%",
    width: "13.61%",
    top: "21.05%",
    right: "82.05%",
    bottom: "20.47%",
    left: "4.34%",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  vectorIcon2: {
    position: "absolute",
    height: "59.36%",
    width: "13.61%",
    top: "353.64%",
    right: "82.06%",
    bottom: "-312.99%",
    left: "4.33%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  titleText2: {
    position: "absolute",
    height: "46.23%",
    width: "25.33%",
    top: "27%",
    right: "50.61%",
    bottom: "26.77%",
    left: "24.07%",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  messageText2: {
    position: "absolute",
    height: "16.69%",
    width: "21.96%",
    top: "56.63%",
    right: "53.98%",
    bottom: "26.68%",
    left: "24.07%",
    fontSize: 16,
    fontFamily: "Inter",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
  },
  jobComponentPressable: {
    position: "absolute",
    height: "50%",
    width: "99.77%",
    top: "50%",
    right: "0%",
    bottom: "0%",
    left: "0.23%",
  },
  jobComponentPressable1: {
    position: "absolute",
    height: "21.6%",
    width: "100.23%",
    top: "25.05%",
    right: "-0.23%",
    bottom: "53.35%",
    left: "0%",
  },
  notificationsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 934,
    overflow: "hidden",
  },
});

export default Notifications;
