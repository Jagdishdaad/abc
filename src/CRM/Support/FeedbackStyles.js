import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
  boldLetter1: {
    fontFamily: " Open Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "33px !important",
    color: "#FFFFFF",
    marginTop: "2vh !important",
    cursor: "pointer",
  },
  boldLetter2: {
    fontFamily: " Open Sans !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "24px !important",
    lineHeight: "33px !important",
    color: "#FFB600",
    marginTop: "2vh !important",
    cursor: "pointer",
  },

  btn: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "center !important",
    alignItems: "center !important",
    padding: "10px 16px !important",
    textTransform: "unset !important",
    background: "#FFB600 !important",
    border: "1px solid #FFB600 !important",
    boxSizing: "border-box !important",
    borderRadius: "4px !important",
  },
  divider: {
    width: "100%",
    height: "10hv",
    backgroundColor: "#2D2D2D !important",
    border: "1px solid #2D2D2D !important",
    marginTop: "1% !important",
    marginBottom: "1% !important",
  },

  formControl: {
    borderColor: "#FFB600 !important",
  },
});

export default Styles;
