import { muiSxPropType } from "components/types";

export const contactInfoWrapper: muiSxPropType = {
  backgroundColor: " #000",
  width: "80px",
  height: "100%",
  opacity: ".6",
  position: "absolute",
  top: "0",
  left: "0",
  color: "#fff",
  display: {
    lg: "block",
    xs: "none",
  },
  fontSize: "13px",
  pt: "88px",
};

export const verticalContent: muiSxPropType = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
  width: "100%",
}

export const makeContentChildVertical: muiSxPropType = {
  display: "flex",
  alignItems: "center",
  writingMode: "vertical-lr",
  transform: "rotate(-180deg)",
}

export const setIconVertically: muiSxPropType = {
  writingMode: "vertical-lr",
  transform: "rotate(-270deg)",
  mb: 1,
  fontSize: "14px",
}