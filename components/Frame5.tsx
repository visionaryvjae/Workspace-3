import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, View, Image, Pressable, Modal } from "react-native";
import BioEdit from "../components/BioEdit";
import WHEdit from "../components/WHEdit";
import EHEdit1 from "../components/EHEdit1";
import EHEdit from "../components/EHEdit";
import LangEdit from "../components/LangEdit";

const FrameScreen = () => {
  const [editIconVisible, setEditIconVisible] = useState(false);
  const [editIcon1Visible, setEditIcon1Visible] = useState(false);
  const [editIcon2Visible, setEditIcon2Visible] = useState(false);
  const [editIcon3Visible, setEditIcon3Visible] = useState(false);
  const [editIcon4Visible, setEditIcon4Visible] = useState(false);

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
  return (
    <>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <View style={styles.groupView1}>
            <View style={styles.groupView}>
              <Text style={styles.workExperienceText}>Work Experience</Text>
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
            </View>
            <View style={styles.languagesView}>
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
            <View style={styles.educationHistortView}>
              <Text style={styles.educationHistoryText}>Education history</Text>
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
            </View>
            <View style={styles.biographyView}>
              <Text style={styles.biographyText}>Biography</Text>
              <Text style={styles.loremIpsumDolorSitAmetCo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque pulvinar sit amet sem vel hendrerit. Suspendisse
                vehicula dui a elit accumsan, eget imperdiet nibh accumsan.
                Suspendisse iaculis ex nec efficitur sodales. Curabitur vel
                commodo neque, sit amet volutpat sapien. Maecenas quam velit,
                facilisis vel posuere eget, consectetur vel justo. Duis finibus
                risus ac est faucibus cursus. Sed non massa ultrices, suscipit
                nunc ut, vulputate justo. Etiam venenatis odio vel tellus
                maximus rhoncus. In pharetra orci non ultricies auctor.
                Pellentesque lobortis null
              </Text>
            </View>
            <View style={styles.skillsView}>
              <View style={styles.jobComponentView}>
                <View style={styles.rectangleView} />
                <Text style={styles.skillText}>Skill</Text>
              </View>
              <View style={styles.jobComponentView1}>
                <View style={styles.rectangleView1} />
                <Text style={styles.skillText1}>Skill</Text>
              </View>
              <View style={styles.jobComponentView2}>
                <View style={styles.rectangleView2} />
                <Text style={styles.skillText2}>Skill</Text>
              </View>
              <View style={styles.jobComponentView3}>
                <View style={styles.rectangleView3} />
                <Text style={styles.skillText3}>Skill</Text>
              </View>
              <Text style={styles.skillsText}>Skills</Text>
            </View>
            <View style={styles.analyticsView}>
              <Text style={styles.analyticsText}>Analytics</Text>
              <Text style={styles.totalEarningsText}>Total earnings</Text>
              <Text style={styles.r20kText}>R20k+</Text>
              <Text style={styles.totalJobsText}>Total jobs</Text>
              <Text style={styles.text4}>89</Text>
              <Text style={styles.totalHoursText}>Total hours</Text>
              <Text style={styles.hoursText}>2902 hours</Text>
            </View>
            <Pressable style={styles.editPressable} onPress={openEditIcon}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/edit.png")}
              />
            </Pressable>
            <Pressable style={styles.editPressable1} onPress={openEditIcon1}>
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/edit1.png")}
              />
            </Pressable>
            <Pressable style={styles.editPressable2} onPress={openEditIcon2}>
              <Image
                style={styles.icon2}
                resizeMode="cover"
                source={require("../assets/edit2.png")}
              />
            </Pressable>
            <Pressable style={styles.editPressable3} onPress={openEditIcon3}>
              <Image
                style={styles.icon3}
                resizeMode="cover"
                source={require("../assets/edit2.png")}
              />
            </Pressable>
            <Pressable style={styles.editPressable4} onPress={openEditIcon4}>
              <Image
                style={styles.icon4}
                resizeMode="cover"
                source={require("../assets/edit2.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={editIconVisible}>
        <View style={styles.editIconOverlay}>
          <Pressable style={styles.editIconBg} onPress={closeEditIcon} />
          <BioEdit onClose={closeEditIcon} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon1Visible}>
        <View style={styles.editIcon1Overlay}>
          <Pressable style={styles.editIcon1Bg} onPress={closeEditIcon1} />
          <WHEdit onClose={closeEditIcon1} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon2Visible}>
        <View style={styles.editIcon2Overlay}>
          <Pressable style={styles.editIcon2Bg} onPress={closeEditIcon2} />
          <EHEdit1 onClose={closeEditIcon2} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon3Visible}>
        <View style={styles.editIcon3Overlay}>
          <Pressable style={styles.editIcon3Bg} onPress={closeEditIcon3} />
          <EHEdit onClose={closeEditIcon3} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={editIcon4Visible}>
        <View style={styles.editIcon4Overlay}>
          <Pressable style={styles.editIcon4Bg} onPress={closeEditIcon4} />
          <LangEdit onClose={closeEditIcon4} />
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
  workExperienceText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 150,
    height: 23.47,
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
    top: 30.93,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 73.6,
  },
  groupView: {
    position: "absolute",
    top: 417.07,
    left: 2,
    width: 263,
    height: 104.54,
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
    width: 98,
    height: 23.47,
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
    top: 30.94,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 73.6,
  },
  languagesView: {
    position: "absolute",
    top: 820.29,
    left: 2,
    width: 263,
    height: 104.54,
  },
  educationHistoryText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 156,
    height: 23.47,
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
    top: 30.93,
    left: 0,
    fontSize: 15,
    color: "#0c3b2e",
    textAlign: "left",
    width: 263,
    height: 61.87,
  },
  educationHistortView: {
    position: "absolute",
    top: 536.54,
    left: 2,
    width: 263,
    height: 92.8,
  },
  biographyText: {
    position: "absolute",
    top: 0,
    left: 0,
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
    top: 34.14,
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
    top: 4.25,
    left: 2,
    width: 364,
    height: 402.15,
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
    height: "29.61%",
    width: "44.41%",
    top: "24.71%",
    right: "0%",
    bottom: "45.68%",
    left: "55.59%",
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
    height: "29.61%",
    width: "44.41%",
    top: "68.94%",
    right: "54.68%",
    bottom: "1.44%",
    left: "0.91%",
  },
  rectangleView2: {
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
  skillText2: {
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
    height: "27.76%",
    width: "44.41%",
    top: "24.54%",
    right: "55.59%",
    bottom: "47.7%",
    left: "0%",
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
  jobComponentView3: {
    position: "absolute",
    height: "29.61%",
    width: "44.41%",
    top: "70.39%",
    right: "0%",
    bottom: "0%",
    left: "55.59%",
  },
  skillsText: {
    position: "absolute",
    top: 0,
    left: 2,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 48,
    height: 23.47,
  },
  skillsView: {
    position: "absolute",
    height: "12.24%",
    width: "88.03%",
    top: "53.27%",
    right: "11.97%",
    bottom: "34.49%",
    left: "0%",
  },
  analyticsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 84,
    height: 23.47,
  },
  totalEarningsText: {
    position: "absolute",
    top: 43.74,
    left: 14,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 126,
    height: 23.47,
  },
  r20kText: {
    position: "absolute",
    top: 71.47,
    left: 49,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 66,
    height: 49.07,
  },
  totalJobsText: {
    position: "absolute",
    top: 153.61,
    left: 34,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 86,
    height: 23.47,
  },
  text4: {
    position: "absolute",
    top: 177.08,
    left: 71,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "left",
    width: 66,
    height: 49.07,
  },
  totalHoursText: {
    position: "absolute",
    top: 43.74,
    left: 203,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "center",
    width: 100,
    height: 23.47,
  },
  hoursText: {
    position: "absolute",
    top: 71.47,
    left: 220,
    fontSize: 18,
    fontFamily: "Inter",
    color: "#bababa",
    textAlign: "center",
    width: 66,
    height: 49.07,
  },
  analyticsView: {
    position: "absolute",
    top: 981.37,
    left: 2,
    width: 303,
    height: 226.15,
  },
  icon: {
    height: "2.65%",
    width: "7.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editPressable: {
    position: "absolute",
    left: "91.22%",
    top: "0%",
    right: "0.8%",
    bottom: "97.35%",
  },
  icon1: {
    height: "2.65%",
    width: "7.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editPressable1: {
    position: "absolute",
    left: "92.02%",
    top: "34.21%",
    right: "0%",
    bottom: "63.14%",
  },
  icon2: {
    height: "2.65%",
    width: "7.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editPressable2: {
    position: "absolute",
    left: "97.87%",
    top: "47.03%",
    right: "-5.85%",
    bottom: "50.32%",
  },
  icon3: {
    height: "2.65%",
    width: "7.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editPressable3: {
    position: "absolute",
    left: "97.87%",
    top: "56.22%",
    right: "-5.85%",
    bottom: "41.12%",
  },
  icon4: {
    height: "2.65%",
    width: "7.98%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  editPressable4: {
    position: "absolute",
    left: "97.87%",
    top: "70.28%",
    right: "-5.85%",
    bottom: "27.07%",
  },
  groupView1: {
    position: "absolute",
    top: 27.75,
    left: 22,
    width: 376,
    height: 1207.51,
  },
  frameView: {
    position: "absolute",
    top: 0,
    left: 4,
    width: 420,
    height: 1263,
  },
  frameView1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 564,
  },
});

export default FrameScreen;
