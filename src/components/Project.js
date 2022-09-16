import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <Box
      id="margin-auto"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
      }}
    >
      <Button
        color="secondary"
        variant="contained"
        sx={{
          width: "100%",
          margin: 1,
        }}
      >
        <p>{props.title}</p>
      </Button>
      <img
        src={props.imageUrl}
        sx={{
          width: "100%",
        }}
      ></img>
      <Button
        href={props.githubUrl}
        color="secondary"
        variant="contained"
        sx={{
          width: "30%",
          margin: 1,
        }}
      >
        Github
      </Button>
    </Box>
  );
};

export default Project;
