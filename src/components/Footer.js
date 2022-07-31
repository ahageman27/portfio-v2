import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Paper } from "@mui/material";

const Footer = () => {
  return (
    <Paper style={{ color: "primary" }}>
      <Box>
        <BottomNavigation id="footer">
          <BottomNavigationAction
            href="https://github.com/ahageman27"
            target="_blank"
            label="GitHub"
            style={{ color: "white" }}
            icon={<GitHubIcon />}
          />
          <BottomNavigationAction
            href="https://www.linkedin.com/in/alex-hageman-254157234"
            target="_blank"
            label="Linkedin"
            style={{ color: "white" }}
            icon={<LinkedInIcon />}
          />
          <BottomNavigationAction
            href="mailto:ahageman27@gmail.com"
            target="_blank"
            label="Email"
            style={{ color: "white" }}
            icon={<EmailIcon />}
          />
        </BottomNavigation>
      </Box>
    </Paper>
  );
};

export default Footer;
