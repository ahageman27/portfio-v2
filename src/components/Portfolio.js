import Project from "./Project"


const project = {
    title: "test",
    imageUrl: "../images/fair-weather-drinks-screenshot.jpg",
    url: "https://wolfe-nate.github.io/Fair-WeatherDrinks/"
}
const Portfolio = (props) => {
    <>
    <Project title={project.title} imageUrl={project.imageUrl} url={project.url} />
    <p>test</p>
    </>
};

export default Portfolio;
