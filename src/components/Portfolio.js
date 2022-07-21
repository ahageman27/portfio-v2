import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Project from "./Project/Project";

import fairWeather from "./Project/project-images/fair-weather-drinks-screenshot.jpg";
import scrolloDeck from "./Project/project-images/scrollodeck-image.jpg";
import recordStore from "./Project/project-images/record-store-screenshot.jpg";

const projects = [
  {
    title: "Fair Weather Drinks",
    imageUrl: fairWeather,
    url: "https://wolfe-nate.github.io/Fair-WeatherDrinks/",
  },
  {
    title: "ScrolloDeck",
    imageUrl: scrolloDeck,
    url: "",
  },
  {
    title: "Record Store",
    imageUrl: recordStore,
    url: "",
  },
];

const Portfolio = (props) => {
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
        PROJECTS
      </Typography>
      <Container className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <Project
            title={project.title}
            imageUrl={project.imageUrl}
            url={project.url}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Portfolio;
