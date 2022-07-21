import "./style.css";
import React, { useState } from "react";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

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
    <>
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
    </>
  );
}

export default App;
