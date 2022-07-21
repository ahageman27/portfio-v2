import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Contact = (props) => {
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
        CONTACT
      </Typography>
    </Container>
  );
};

export default Contact;
