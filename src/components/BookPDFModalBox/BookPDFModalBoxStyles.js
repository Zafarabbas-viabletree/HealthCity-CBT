// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  itemContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 991px)": {
      flexDirection: "column",
    },
  },
  itemImage: {
    width: 348,
    "@media (max-width: 487px)": {
      width: 270,
    },
  },
  bookBox: {
    padding: "41px",
    position: "absolute",
    top: 36,
    left: 260,
    width: "795px",
    height: "126px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    "@media(max-width: 1150px)": {
      top: 20,
      bottom: 0,
      left: 0,
      width: "100%",
    },
    "@media(max-width: 991px)": {
      top: 0,
      bottom: 0,
      right: 0,
      margin: "auto",
      width: "100%",
    },
    "@media (max-width: 487px)": {
      position: "relative",
      bottom: 20,
      height: 200,
      width: 270,
      padding: 15,
      margin: 0,
    },
  },
  bookHeading: {
    color: "rgba(255, 255, 255, 0.5)",
    position: "relative",
    paddingLeft: 100,
    ":before": {
      content: "''",
      position: "absolute",
      width: 70,
      height: 1,
      background: "rgba(255, 255, 255, 0.5)",
      display: "inline-block",
      top: 5,
      left: 0,
    },
    "@media(max-width: 991px)": {
      fontSize: 20,
      color: "rgba(255, 255, 255, 0.8)",
      ":before": {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  bookTitle: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: 600,
    margin: "18px 0",
    lineHeight: 1.4,
    "@media(max-width: 991px) and (min-wdith: 480px)": {
      fontSize: 40,
    },
    "@media(max-width: 840px)": {
      margin: 0,
    },
  },
  mainContainer: {
    paddingTop: 70,
    margin: "10px auto 0 40px",
    width: "100%",
    "@media(max-width: 991px)": {
      margin: 0,
      paddingTop: 10,
    },
  },
  fillFormHead: {
    color: Colors.black,
    fontWeight: 600,
    textTransform: "capitalize",
    fontSize: 18,
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  formControl: {
    width: "100%",
    height: "46px",
    display: "block",
    // padding: ".375rem .75rem",
    padding: "13px 0 13px 16px",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: Colors.text.accent,
    backgroundColor: Colors.white,
    backgroundClip: "padding-box",
    border: `solid 1px ${Colors.background.borderColor}`,
    borderRadius: ".25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ":focus": {
      color: Colors.text.accent,
      backgroundColor: Colors.white,
      border: `solid 1px ${Colors.background.borderColor}`,
      outline: 0,
      boxShadow: "none",
    },
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
  btnContainer: {
    marginTop: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  checkboxCont: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  checkboxCss: {
    width: 22,
    height: 22,
    borderRadius: 1,
  },

  labelText: {
    lineHeight: 1.4,
    width: 296,
    marginLeft: 21,
  },
  downloadBtn: {
    width: 177,
    height: 57,
    background: Colors.background.green,
    color: Colors.white,
    borderRadius: 1,
    border: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    textTransform: "uppercase",
  },
});
