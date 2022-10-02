import * as React from "react";
import { useState, useCallback } from "react";
import { Text, StyleSheet, Image, Pressable, Modal, View } from "react-native";
import Applied from "../components/Applied";

const SearchEntry = () => {
  const [fontAwesomeIconsVisible, setFontAwesomeIconsVisible] = useState(false);

  const openFontAwesomeIcons = useCallback(() => {
    setFontAwesomeIconsVisible(true);
  }, []);

  const closeFontAwesomeIcons = useCallback(() => {
    setFontAwesomeIconsVisible(false);
  }, []);
  return (
    <>
      <View style={styles.searchEntryView}>
        <View style={styles.searchBarView}>
          <Text style={styles.searchForJobs}>Search for jobs</Text>
          <Pressable
            style={styles.fontAwesomeIcons}
            onPress={openFontAwesomeIcons}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/fontawesome--icons15.png")}
            />
          </Pressable>
          <Image
            style={styles.fontAwesomeIcons1}
            resizeMode="cover"
            source={require("../assets/fontawesome--icons16.png")}
          />
        </View>
        <View style={styles.keyboardView}>
          <View style={styles.keysView}>
            <Image
              style={styles.dictationIcon}
              resizeMode="cover"
              source={require("../assets/dictation.png")}
            />
            <Image
              style={styles.emojiIcon}
              resizeMode="cover"
              source={require("../assets/emoji.png")}
            />
            <View style={styles.returnView}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle.png")}
              />
              <Text style={styles.labelText}>Go</Text>
            </View>
            <View style={styles.spaceView}>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={styles.labelText1}>space</Text>
            </View>
            <View style={styles.view}>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle2.png")}
              />
              <Text style={styles.labelText2}>123</Text>
            </View>
            <View style={styles.deleteView}>
              <View style={styles.keyLightView}>
                <Image
                  style={styles.rectangleIcon3}
                  resizeMode="cover"
                  source={require("../assets/rectangle3.png")}
                />
                <Text style={styles.labelText3}>{` `}</Text>
              </View>
              <Image
                style={styles.deleteButtonIcon}
                resizeMode="cover"
                source={require("../assets/delete-button.png")}
              />
            </View>
            <View style={styles.shiftView}>
              <View style={styles.keyLightView1}>
                <View style={styles.rectangleView} />
                <Text style={styles.symbolText}>{` `}</Text>
              </View>
              <Image
                style={styles.shiftIcon}
                resizeMode="cover"
                source={require("../assets/shift.png")}
              />
            </View>
            <View style={styles.mView}>
              <View style={styles.rectangleView1} />
              <Text style={styles.symbolText1}>M</Text>
            </View>
            <View style={styles.nView}>
              <View style={styles.rectangleView2} />
              <Text style={styles.symbolText2}>N</Text>
            </View>
            <View style={styles.bView}>
              <View style={styles.rectangleView3} />
              <Text style={styles.symbolText3}>B</Text>
            </View>
            <View style={styles.vView}>
              <View style={styles.rectangleView4} />
              <Text style={styles.symbolText4}>V</Text>
            </View>
            <View style={styles.cView}>
              <View style={styles.rectangleView5} />
              <Text style={styles.symbolText5}>C</Text>
            </View>
            <View style={styles.xView}>
              <View style={styles.rectangleView6} />
              <Text style={styles.symbolText6}>X</Text>
            </View>
            <View style={styles.zView}>
              <View style={styles.rectangleView7} />
              <Text style={styles.symbolText7}>Z</Text>
            </View>
            <View style={styles.lView}>
              <View style={styles.rectangleView8} />
              <Text style={styles.symbolText8}>L</Text>
            </View>
            <View style={styles.kView}>
              <View style={styles.rectangleView9} />
              <Text style={styles.symbolText9}>K</Text>
            </View>
            <View style={styles.jView}>
              <View style={styles.rectangleView10} />
              <Text style={styles.symbolText10}>J</Text>
            </View>
            <View style={styles.hView}>
              <View style={styles.rectangleView11} />
              <Text style={styles.symbolText11}>H</Text>
            </View>
            <View style={styles.gView}>
              <View style={styles.rectangleView12} />
              <Text style={styles.symbolText12}>G</Text>
            </View>
            <View style={styles.fView}>
              <View style={styles.rectangleView13} />
              <Text style={styles.symbolText13}>F</Text>
            </View>
            <View style={styles.dView}>
              <View style={styles.rectangleView14} />
              <Text style={styles.symbolText14}>D</Text>
            </View>
            <View style={styles.sView}>
              <View style={styles.rectangleView15} />
              <Text style={styles.symbolText15}>S</Text>
            </View>
            <View style={styles.aView}>
              <View style={styles.rectangleView16} />
              <Text style={styles.symbolText16}>A</Text>
            </View>
            <View style={styles.pView}>
              <View style={styles.rectangleView17} />
              <Text style={styles.symbolText17}>P</Text>
            </View>
            <View style={styles.oView}>
              <View style={styles.rectangleView18} />
              <Text style={styles.symbolText18}>O</Text>
            </View>
            <View style={styles.iView}>
              <View style={styles.rectangleView19} />
              <Text style={styles.symbolText19}>I</Text>
            </View>
            <View style={styles.uView}>
              <View style={styles.rectangleView20} />
              <Text style={styles.symbolText20}>U</Text>
            </View>
            <View style={styles.yView}>
              <View style={styles.rectangleView21} />
              <Text style={styles.symbolText21}>Y</Text>
            </View>
            <View style={styles.tView}>
              <View style={styles.rectangleView22} />
              <Text style={styles.symbolText22}>T</Text>
            </View>
            <View style={styles.rView}>
              <View style={styles.rectangleView23} />
              <Text style={styles.symbolText23}>R</Text>
            </View>
            <View style={styles.eView}>
              <View style={styles.rectangleView24} />
              <Text style={styles.symbolText24}>E</Text>
            </View>
            <View style={styles.wView}>
              <View style={styles.rectangleView25} />
              <Text style={styles.symbolText25}>W</Text>
            </View>
            <View style={styles.qView}>
              <View style={styles.rectangleView26} />
              <Text style={styles.symbolText26}>Q</Text>
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={fontAwesomeIconsVisible}>
        <View style={styles.fontAwesomeIconsOverlay}>
          <Pressable
            style={styles.fontAwesomeIconsBg}
            onPress={closeFontAwesomeIcons}
          />
          <Applied onClose={closeFontAwesomeIcons} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  fontAwesomeIconsOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fontAwesomeIconsBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  searchForJobs: {
    position: "absolute",
    top: 12,
    right: 76,
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#0c3b2e",
    textAlign: "left",
    width: 226,
    height: 25,
  },
  icon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  fontAwesomeIcons: {
    position: "absolute",
    left: 298,
    top: 12,
  },
  fontAwesomeIcons1: {
    position: "absolute",
    height: "65.31%",
    width: "9.5%",
    top: "16.33%",
    right: "85.46%",
    bottom: "18.37%",
    left: "5.04%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  searchBarView: {
    position: "absolute",
    top: 91,
    left: 33,
    borderRadius: 44,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6d9773",
    borderWidth: 1,
    width: 365,
    height: 49,
    opacity: 0.7,
  },
  dictationIcon: {
    position: "relative",
    width: 17.12,
    height: 25,
  },
  emojiIcon: {
    position: "relative",
    width: 30.82,
    height: 27,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    right: 0.44,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 12.44,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  returnView: {
    position: "absolute",
    width: "23.85%",
    top: 162,
    right: "0%",
    left: "76.15%",
    height: 42,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 0,
    right: -0.28,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText1: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 25.72,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  spaceView: {
    position: "absolute",
    width: "49.32%",
    top: 162,
    right: "25.47%",
    left: "25.2%",
    height: 42,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 0,
    right: 0.3,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText2: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 12.3,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  view: {
    position: "absolute",
    width: "23.58%",
    top: 162,
    right: "76.42%",
    left: "0%",
    height: 42,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 0,
    right: -0.06,
    bottom: -1,
    left: 0,
    borderRadius: 4.6,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  labelText3: {
    position: "absolute",
    height: "50%",
    top: "26.19%",
    right: 5.94,
    bottom: "23.81%",
    left: 0,
    fontSize: 16,
    letterSpacing: -0.32,
    lineHeight: 21,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  keyLightView: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    height: 42,
  },
  deleteButtonIcon: {
    position: "relative",
    width: 25.86,
    height: 16.99,
  },
  deleteView: {
    position: "absolute",
    width: "11.38%",
    top: 108,
    right: "0%",
    left: "88.62%",
    height: 42,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    right: -0.06,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    top: "50%",
    left: "42.11%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  keyLightView1: {
    position: "absolute",
    width: "100%",
    top: 0,
    right: "0%",
    left: "0%",
    height: 42,
  },
  shiftIcon: {
    position: "absolute",
    width: "44.95%",
    top: 12.2,
    right: "27.29%",
    left: "27.76%",
    maxWidth: "100%",
    height: 16.46,
  },
  shiftView: {
    position: "absolute",
    width: "11.38%",
    top: 108,
    right: "88.62%",
    left: "0%",
    height: 42,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText1: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "54.76%",
    top: "50%",
    right: "28.81%",
    left: "16.43%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  mView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "14.91%",
    left: "76.42%",
    height: 42,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText2: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  nView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "25.2%",
    left: "66.12%",
    height: 42,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText3: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  bView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "35.5%",
    left: "55.83%",
    height: 42,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText4: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "43.81%",
    top: "50%",
    right: "34.29%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  vView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "45.53%",
    left: "45.8%",
    height: 42,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText5: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  cView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "55.83%",
    left: "35.5%",
    height: 42,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText6: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "43.81%",
    top: "50%",
    right: "34.29%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  xView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "65.85%",
    left: "25.47%",
    height: 42,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText7: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  zView: {
    position: "absolute",
    width: "8.67%",
    top: 108,
    right: "76.15%",
    left: "15.18%",
    height: 42,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText8: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "35.59%",
    top: "50%",
    right: "37.03%",
    left: "27.38%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  lView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "4.88%",
    left: "86.45%",
    height: 42,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText9: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  kView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "15.18%",
    left: "76.15%",
    height: 42,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText10: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "35.59%",
    top: "50%",
    right: "37.03%",
    left: "27.38%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  jView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "25.2%",
    left: "66.12%",
    height: 42,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText11: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  hView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "35.5%",
    left: "55.83%",
    height: 42,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText12: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  gView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "45.53%",
    left: "45.8%",
    height: 42,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText13: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "35.59%",
    top: "50%",
    right: "37.03%",
    left: "27.38%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  fView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "55.83%",
    left: "35.5%",
    height: 42,
  },
  rectangleView14: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText14: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  dView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "65.85%",
    left: "25.47%",
    height: 42,
  },
  rectangleView15: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText15: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  sView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "76.15%",
    left: "15.18%",
    height: 42,
  },
  rectangleView16: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText16: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "43.81%",
    top: "50%",
    right: "34.29%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  aView: {
    position: "absolute",
    width: "8.67%",
    top: 54,
    right: "86.18%",
    left: "5.15%",
    height: 42,
  },
  rectangleView17: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText17: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  pView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "0%",
    left: "91.33%",
    height: 42,
  },
  rectangleView18: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText18: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "49.28%",
    top: "50%",
    right: "31.55%",
    left: "19.17%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  oView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "10.03%",
    left: "81.3%",
    height: 42,
  },
  rectangleView19: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText19: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "19.17%",
    top: "50%",
    right: "45.24%",
    left: "35.59%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  iView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "20.33%",
    left: "71%",
    height: 42,
  },
  rectangleView20: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText20: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "46.55%",
    top: "50%",
    right: "31.55%",
    left: "21.9%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  uView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "30.35%",
    left: "60.98%",
    height: 42,
  },
  rectangleView21: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText21: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  yView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "40.65%",
    left: "50.68%",
    height: 42,
  },
  rectangleView22: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText22: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  tView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "50.68%",
    left: "40.65%",
    height: 42,
  },
  rectangleView23: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText23: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "41.07%",
    top: "50%",
    right: "34.29%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  rView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "60.98%",
    left: "30.35%",
    height: 42,
  },
  rectangleView24: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText24: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "38.33%",
    top: "50%",
    right: "37.03%",
    left: "24.64%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  eView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "71%",
    left: "20.33%",
    height: 42,
  },
  rectangleView25: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText25: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "60.24%",
    top: "50%",
    right: "26.07%",
    left: "13.69%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  wView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "81.3%",
    left: "10.03%",
    height: 42,
  },
  rectangleView26: {
    position: "absolute",
    top: 0,
    right: -0.48,
    bottom: 0,
    left: 0,
    borderRadius: 4.6,
    backgroundColor: "#f9f9f9",
    shadowColor: "#898a8d",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
  },
  symbolText26: {
    position: "absolute",
    transform: [
      {
        translateY: -13,
      },
    ],
    width: "49.28%",
    top: "50%",
    right: "31.55%",
    left: "19.17%",
    fontSize: 22.5,
    letterSpacing: -0.55,
    fontFamily: "Abhaya Libre SemiBold",
    color: "#0f161e",
    textAlign: "center",
  },
  qView: {
    position: "absolute",
    width: "8.67%",
    top: 0,
    right: "91.33%",
    left: "0%",
    height: 42,
  },
  keysView: {
    position: "absolute",
    width: "98.4%",
    top: 8,
    right: "0.8%",
    left: "0.8%",
    height: 259,
  },
  keyboardView: {
    position: "absolute",
    top: 593,
    left: 0,
    backgroundColor: "#d1d5db",
    width: 428,
    height: 333.27,
  },
  searchEntryView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 933,
    overflow: "hidden",
  },
});

export default SearchEntry;
