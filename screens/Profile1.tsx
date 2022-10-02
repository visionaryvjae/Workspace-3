import * as React from "react";
import { useState, useCallback } from "react";
import { Image, StyleSheet, Pressable, Modal, View, Text } from "react-native";
import Menu1 from "../components/Menu1";

const Profile1 = () => {
  const [fontAwesomeIcons2Visible, setFontAwesomeIcons2Visible] =
    useState(false);

  const openFontAwesomeIcons2 = useCallback(() => {
    setFontAwesomeIcons2Visible(true);
  }, []);

  const closeFontAwesomeIcons2 = useCallback(() => {
    setFontAwesomeIcons2Visible(false);
  }, []);
  return (
    <>
      <View style={styles.profileView}>
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
        <Pressable
          style={styles.fontAwesomeIcons2}
          onPress={openFontAwesomeIcons2}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons23.png")}
          />
        </Pressable>
        <Text style={styles.johnDoeText}>John Doe</Text>
        <Text style={styles.qualificationTitleText}>Qualification/Title</Text>
        <Text style={styles.yourRateR400hr}>Your rate: R400/hr</Text>
        <View style={styles.frameView}>
          <View style={styles.groupView1}>
            <Text style={styles.workExperienceText}>Work Experience</Text>
            <Text style={styles.biographyText}>Biography</Text>
            <Text style={styles.companyNameTitle20222022}>
              <Text style={styles.companyNameText1}>
                <Text style={styles.companyNameText}>Company name</Text>
              </Text>
              <Text style={styles.titleText1}>
                <Text style={styles.titleText}>Title</Text>
              </Text>
              <Text style={styles.text1}>
                <Text style={styles.text}>2022-2022</Text>
              </Text>
            </Text>
            <View style={styles.groupView}>
              <Text style={styles.languagesText}>Languages</Text>
              <Text style={styles.languageProfiencyLanguage}>
                <Text style={styles.languageProfiencyText}>
                  <Text style={styles.languageText}>{`Language: `}</Text>
                  <Text style={styles.profiencyText}>Profiency</Text>
                </Text>
                <Text style={styles.languageProfiencyText1}>
                  <Text style={styles.languageText1}>{`Language: `}</Text>
                  <Text style={styles.profiencyText1}>Profiency</Text>
                </Text>
                <Text style={styles.languageProfiencyText2}>
                  <Text style={styles.languageText2}>{`Language: `}</Text>
                  <Text style={styles.profiencyText2}>Profiency</Text>
                </Text>
              </Text>
            </View>
            <Text style={styles.educationHistoryText}>Education history</Text>
            <Text style={styles.skillsText}>Skills</Text>
            <Text style={styles.analyticsText}>Analytics</Text>
            <Text style={styles.belgiumCampusITversityBache}>
              <Text style={styles.belgiumCampusITversity1}>
                <Text style={styles.belgiumCampusITversity}>
                  Belgium Campus ITversity
                </Text>
              </Text>
              <Text style={styles.bachelorOfComputingSE}>
                <Text style={styles.bachelorOfComputing}>
                  Bachelor of Computing: SE
                </Text>
              </Text>
              <Text style={styles.text3}>
                <Text style={styles.text2}>2022-2022</Text>
              </Text>
            </Text>
            <Text style={styles.loremIpsumDolorSitAmetCo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque pulvinar sit amet sem vel hendrerit. Suspendisse
              vehicula dui a elit accumsan, eget imperdiet nibh accumsan.
              Suspendisse iaculis ex nec efficitur sodales. Curabitur vel
              commodo neque, sit amet volutpat sapien. Maecenas quam velit,
              facilisis vel posuere eget, consectetur vel justo. Duis finibus
              risus ac est faucibus cursus. Sed non massa ultrices, suscipit
              nunc ut, vulputate justo. Etiam venenatis odio vel tellus maximus
              rhoncus. In pharetra orci non ultricies auctor. Pellentesque
              lobortis null
            </Text>
            <View style={styles.jobComponentView}>
              <View style={styles.rectangleView} />
              <Text style={styles.skillText}> Skill</Text>
            </View>
            <Text style={styles.totalEarningsText}>Total earnings</Text>
            <View style={styles.jobComponentView1}>
              <View style={styles.rectangleView1} />
              <Text style={styles.skillText1}>Skill</Text>
            </View>
            <View style={styles.jobComponentView3}>
              <View style={styles.rectangleView2} />
              <Text style={styles.skillText2}>Skill</Text>
              <View style={styles.jobComponentView2}>
                <View style={styles.rectangleView3} />
                <Text style={styles.skillText3}>Skill</Text>
              </View>
            </View>
            <Text style={styles.r20kText}>R20k+</Text>
            <Text style={styles.totalJobsText}>Total jobs</Text>
            <Text style={styles.text4}>89</Text>
            <Text style={styles.totalHoursText}>Total hours</Text>
            <Text style={styles.hoursText}>2902 hours</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={fontAwesomeIcons2Visible}
      >
        <View style={styles.fontAwesomeIcons2Overlay}>
          <Pressable
            style={styles.fontAwesomeIcons2Bg}
            onPress={closeFontAwesomeIcons2}
          />
          <Menu1 onClose={closeFontAwesomeIcons2} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIcons2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fontAwesomeIcons2Bg: {
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
  icon: {
    height: "3.78%",
    width: "8.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  fontAwesomeIcons2: {
    position: "absolute",
    left: "84.81%",
    top: "5.83%",
    right: "7.01%",
    bottom: "90.39%",
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
  workExperienceText: {
    position: "absolute",
    top: 387,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  biographyText: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  companyNameText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  companyNameText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  titleText: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  titleText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  text1: {
    margin: 0,
  },
  companyNameTitle20222022: {
    position: "absolute",
    top: 416,
    left: 2,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 69,
  },
  languagesText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  languageText: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText: {
    fontFamily: "Inter",
  },
  languageProfiencyText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  languageText1: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText1: {
    fontFamily: "Inter",
  },
  languageProfiencyText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  languageText2: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  profiencyText2: {
    fontFamily: "Inter",
  },
  languageProfiencyText2: {
    margin: 0,
  },
  languageProfiencyLanguage: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 69,
  },
  groupView: {
    position: "absolute",
    top: 765,
    left: 2,
    width: 263,
    height: 98,
  },
  educationHistoryText: {
    position: "absolute",
    top: 499,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  skillsText: {
    position: "absolute",
    top: 599,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  analyticsText: {
    position: "absolute",
    top: 877,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  belgiumCampusITversity: {
    fontWeight: "500",
    fontFamily: "Inter",
  },
  belgiumCampusITversity1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  bachelorOfComputing: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  bachelorOfComputingSE: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  text2: {
    fontWeight: "300",
    fontFamily: "Inter",
  },
  text3: {
    margin: 0,
  },
  belgiumCampusITversityBache: {
    position: "absolute",
    top: 528,
    left: 2,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 58,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 32,
    left: 2,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 364,
    height: 345,
  },
  rectangleView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  skillText: {
    position: "absolute",
    height: "67.35%",
    width: "82.5%",
    top: "21.73%",
    right: "9%",
    bottom: "10.92%",
    left: "8.5%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  jobComponentView: {
    position: "absolute",
    height: "3.21%",
    width: "40.16%",
    top: "58.77%",
    right: "59.29%",
    bottom: "38.02%",
    left: "0.55%",
  },
  totalEarningsText: {
    position: "absolute",
    top: 918,
    left: 14,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  skillText1: {
    position: "absolute",
    height: "67.35%",
    width: "82.5%",
    top: "21.73%",
    right: "9%",
    bottom: "10.92%",
    left: "8.5%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  jobComponentView1: {
    position: "absolute",
    height: "3.21%",
    width: "40.16%",
    top: "58.68%",
    right: "10.11%",
    bottom: "38.11%",
    left: "49.73%",
  },
  rectangleView2: {
    position: "absolute",
    height: "89.74%",
    width: "45.09%",
    top: "0%",
    right: "54.91%",
    bottom: "10.26%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  skillText2: {
    position: "absolute",
    height: "60.45%",
    width: "37.2%",
    top: "19.5%",
    right: "58.97%",
    bottom: "20.06%",
    left: "3.83%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
  },
  skillText3: {
    position: "absolute",
    height: "67.35%",
    width: "82.5%",
    top: "21.73%",
    right: "9%",
    bottom: "10.92%",
    left: "8.5%",
    fontSize: 15,
    fontFamily: "Inter",
    color: "#6d9773",
    textAlign: "center",
  },
  jobComponentView2: {
    position: "absolute",
    height: "89.74%",
    width: "45.09%",
    top: "10.26%",
    right: "0%",
    bottom: "0%",
    left: "54.91%",
  },
  jobComponentView3: {
    position: "absolute",
    height: "3.58%",
    width: "89.07%",
    top: "63.18%",
    right: "10.11%",
    bottom: "33.24%",
    left: "0.82%",
  },
  r20kText: {
    position: "absolute",
    top: 944,
    left: 49,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 66,
    height: 46,
  },
  totalJobsText: {
    position: "absolute",
    top: 1021,
    left: 34,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 1043,
    left: 71,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 66,
    height: 46,
  },
  totalHoursText: {
    position: "absolute",
    top: 918,
    left: 203,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
  },
  hoursText: {
    position: "absolute",
    top: 944,
    left: 220,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "center",
    width: 66,
    height: 46,
  },
  groupView1: {
    position: "absolute",
    top: 11,
    left: 31,
    width: 366,
    height: 1089,
  },
  frameView: {
    position: "absolute",
    top: 361,
    left: 0,
    backgroundColor: "#fff",
    width: 428,
    height: 491,
  },
  profileView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 934,
    overflow: "hidden",
  },
});

export default Profile1;
