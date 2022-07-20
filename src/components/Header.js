import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";


const Header = (props) => {

  const { showAboutMeHandler, showPortfolioHandler, showResumeHandler, showContactHAndler } = props;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ALEX HAGEMAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={showAboutMeHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About Me
              </Button>
              <Button
                onClick={showPortfolioHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Portfolio
              </Button>
              <Button
                onClick={showResumeHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Resume
              </Button>
              <Button
                onClick={showContactHAndler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
