import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProfilePic from "../images/ProfilePic.jpg";

const AboutMe = (props) => {
  return (
    <Container>
      <Typography
        variant="h3"
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
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item sm={12} md={4}>
          <Avatar
            alt="Alex Hageman"
            src={ProfilePic}
            sx={{
              width: 300,
              height: 300,
            }}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typography paragraph={true} sx={{ fontWeight: 500 }}>
            Hello! My name is Alex Hageman. I am a software developer currently
            based in Denver, Colorado. I just completed a Full Stack Web
            Development Bootcamp through University of Denver covering all
            aspects of web development and design in the modern age of the
            internet. I also attended Metropolitan State Universtiy of Denver
            for four semesters studying Computer Science. I love my cat, vinyl
            records, and video games.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;
