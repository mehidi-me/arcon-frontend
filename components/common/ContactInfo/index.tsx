import { Box } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import * as sxStyles from "./style";

export default function ContactInfo() {
  return (
    <Box sx={sxStyles.contactInfoWrapper}>
      <Box sx={sxStyles.verticalContent}>
        <Box sx={sxStyles.makeContentChildVertical}>
          <MailOutlineIcon color="secondary" sx={sxStyles.setIconVertically} />
          <Box component="div">
            <a href="mailto:arconconsultancybd@gmail.com">
              arconconsultancybd@gmail.com
            </a>
          </Box>
        </Box>
        <Box sx={sxStyles.makeContentChildVertical}>
          <PhoneIcon color="secondary" sx={sxStyles.setIconVertically} />
          <Box component="div">
            <a href="tel:+8801687266144">+8801687266144</a>
          </Box>
        </Box>
        <Box sx={sxStyles.makeContentChildVertical}>
          <LocationOnIcon color="secondary" sx={sxStyles.setIconVertically} />
          <Box component="div">
            <a href="#">
              Zakir Hossain Road, Khulshi
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
