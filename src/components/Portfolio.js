import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Project from "./Project";

import fairWeather from "../images/fair-weather-drinks-image.jpg";
import scrolloDeck from "../images/scrollodeck-image.jpg";
import recordStore from "../images/record-store-image.jpg";

const projects = [
  {
    title: "Fair Weather Drinks",
    imageUrl: `url(${fairWeather})`,
    url: "https://wolfe-nate.github.io/Fair-WeatherDrinks/",
  },
  {
    title: "ScrolloDeck",
    imageUrl: `url(${scrolloDeck})`,
    url: "https://dry-crag-90231.herokuapp.com/",
  },
  {
    title: "Record Store",
    imageUrl: `url(${recordStore})`,
    url: "",
  },
];

const Portfolio = (props) => {
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
        PROJECTS
      </Typography>
      <Container className="d-flex flex-wrap justify-content-center">
        {projects.map((project, id) => (
          <Project
            key={id}
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
