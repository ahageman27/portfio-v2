import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Resume = (props) => {
  return (
    <Container className="d-flex flex-wrap justify-content-center">
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
        RESUME
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          m: 5,
          display: "flex",
          justifyContent: "start",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PROFICIENCIES
      </Typography>
      <Box
        sx={{
          display: "flexrow",
          justifyContent: "center",
          width: "100%",
          maxWidth: 360,
          bgcolor: "primary.secondary",
        }}
      >
        <List sx={{ display: "flexrow", justifyContent: "center" }}>
          <ListItem disablePadding>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Python" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="HTML & CSS" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Object Oriented Programming" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="REACT" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="NodeJS" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="SQL" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="MongoDB" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="GraphQL" />
          </ListItem>
        </List>
      </Box>
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
        <a href="../resume/Resume2022.pdf" download>
          DOWNLOAD
        </a>
      </Typography>
    </Container>
  );
};

export default Resume;
