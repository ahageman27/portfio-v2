import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Project from "./Project";

import fairWeather from "../images/fair-weather-drinks-image.jpg";
import scrolloDeck from "../images/scrollodeck-image.jpg";
import waterJugProblem from "../images/water-jug-problem-image.jpg";

const projects = [
  {
    title: "Fair Weather Drinks",
    imageUrl: `${fairWeather}`,
    deployedUrl: "https://wolfe-nate.github.io/Fair-WeatherDrinks/",
  },
  {
    title: "ScrolloDeck",
    imageUrl: `${scrolloDeck}`,
    deployedUrl: "https://dry-crag-90231.herokuapp.com/",
  },
  {
    title: "Water Jug Problem",
    imageUrl: `${waterJugProblem}`,
    deployedUrl: "https://github.com/ahageman27/water-jug-problem",
    githubUrl: "https://github.com/ahageman27/water-jug-problem",
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
