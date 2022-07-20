import Avatar from "@mui/material/Avatar";

import ProfilePic from "../images/ProfilePic.jpg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const AboutMe = (props) => {
  return (
    <Container>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          m: 5,
          display: "flex",
          justifyContent: "center",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ABOUT ME
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={4}>
          <Avatar
            alt="Alex Hageman"
            src={ProfilePic}
            sx={{
              width: 300,
              height: 300,
            }}
          />
        </Grid>
        <Grid item xs={8} sx={{}}>
          <Typography paragraph={true} sx={{ fontWeight: 500 }}>
            Hello! My name is Alex Hageman. I am a software developer currently
            based in Denver, Colorado. I just completed a Full Stack Web
            Development Bootcamp through University of Denver and learned a lot.
            I love my cat, Magic the Gathering, and video games.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
