import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { send } from "emailjs-com";

const Contact = (props) => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ani098t", "template_cwyzmvm", toSend, "B487RaQZlpEvVEY3C")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend(toSend.submitted = true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

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
        CONTACT
      </Typography>
      {!toSend.submitted && (
        <form onSubmit={onSubmit}>
          <Card>
            <CardContent>
              <TextField
                label="Name"
                name="name"
                placeholder="Full Name"
                value={toSend.from_name}
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                label="Email"
                name="email"
                placeholder="Email"
                value={toSend.reply_to}
                variant="outlined"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                label="Message"
                name="message"
                placeholder="Type your message here."
                value={toSend.message}
                variant="outlined"
                fullWidth
                required
                multiline
                rows={7}
                onChange={handleChange}
              />
            </CardContent>
            <Button variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Card>
          <Typography
            variant="h4"
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
            ahageman27@gmail.com
          </Typography>
        </form>
      )}
      {toSend.submitted && (
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
          SENT
        </Typography>
      )}
    </Container>
  );
};

export default Contact;
