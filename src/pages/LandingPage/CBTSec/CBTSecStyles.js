// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../../theme";

export default StyleSheet.create({
  CBTSec: {
    width: "100%",
    height: "100%",
    paddingTop: "70px",
    backgroundColor: Colors.white,
    "@media (max-width: 991px)": {
      marginTop: "30px",
      paddingTop: "10px",
    },
  },
  CBTInnerCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    "@media (max-width: 1199px)": {
      flexDirection: "column",
    },
  },
  CBTTextCont: {
    width: 480,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
  CBTHeading: {
    fontSize: 40,
    lineHeight: 1.47,
    fontWeight: 600,
    color: Colors.text.primary,
    textTransform: "capitalize",
    marginBottom: 36,
    "@media (max-width: 600px)": {
      fontSize: 30,
      marginBottom: 26,
    },
  },
  cbtText: {
    color: Colors.text.secondary,
    marginBottom: 30,
    lineHeight: 1.5,
  },
  cbtexample: {
    color: Colors.text.secondary,
    marginBottom: 22,
    lineHeight: 1.5,
  },
  exampleList: {
    color: Colors.background.primary,
    lineHeight: "34px",
  },
  exampleListSpan: {
    color: Colors.text.secondary,
  },
  cbtImgOne: {
    width: 526,
    marginBottom: 53,
    "@media (max-width: 1199px)": {
      marginTop: 30,
      marginBottom: 0,
      width: "100%",
    },
  },
  cbtImgTwo: {
    width: 480,
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
  CBTInerContTwo: {
    width: 550,
    lineHeight: 1.47,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1199px)": {
      width: "100%",
      flexDirection: "column-reverse",
      marginTop: 50,
    },
  },
  cbtTextTwo: {
    color: Colors.text.secondary,
    marginBottom: 30,
  },
  cbtTextTwoCont: {
    width: 520,
    "@media (max-width: 1199px)": {
      width: "100%",
    },
  },
});
