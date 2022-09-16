import "./style.css";
import React, { useState } from "react";

import styled from "styled-components";
import Box from "@mui/material/Box";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

function App() {
  const [state, setState] = useState({
    showAboutMe: true,
    showPortfolio: false,
    showResume: false,
    showContact: false,
  });

  const showAboutMeHandler = () => {
    setState({
      showAboutMe: true,
      showPortfolio: false,
      showResume: false,
      showContact: false,
    });
  };
  const showPortfolioHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: true,
      showResume: false,
      showContact: false,
    });
  };
  const showResumeHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: false,
      showResume: true,
      showContact: false,
    });
  };
  const showContactHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: false,
      showResume: false,
      showContact: true,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        showAboutMeHandler={showAboutMeHandler}
        showPortfolioHandler={showPortfolioHandler}
        showResumeHandler={showResumeHandler}
        showContactHandler={showContactHandler}
      />
      {state.showAboutMe && <AboutMe />}
      {state.showPortfolio && <Portfolio />}
      {state.showResume && <Resume />}
      {state.showContact && <Contact />}
      <Footer
        sx={{
          mt: "auto",
        }}
      />
    </Box>
  );
}

export default App;
