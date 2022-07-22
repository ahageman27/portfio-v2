import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import YardIcon from "@mui/icons-material/Yard";

const Header = ({
  showAboutMeHandler,
  showPortfolioHandler,
  showResumeHandler,
  showContactHandler,
}) => {

const [value, setValue] = React.useState(0);
  
  return (
    

    <AppBar
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <YardIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { vmd: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ALEX HAGEMAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
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
              onClick={showContactHandler}
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
