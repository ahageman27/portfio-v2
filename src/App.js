import "./style.css";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Porfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import React, { useState } from "react";

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
    console.log(state);
  };
  const showPortfolioHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: true,
      showResume: false,
      showContact: false,
    });
    console.log(state);
  };
  const showResumeHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: false,
      showResume: true,
      showContact: false,
    });
    console.log(state);
  };
  const showContactHandler = () => {
    setState({
      showAboutMe: false,
      showPortfolio: false,
      showResume: false,
      showContact: true,
    });
    console.log(state);
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
      {state.showContact && <Contact />}
      {state.showPortfolio && <Porfolio />}
      {state.showResume && <Resume />}
    </>
  );
}

export default App;
