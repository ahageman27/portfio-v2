import "./App.css";

import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Porfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { Component } from "react";

class App extends Component {
  state = {
    showAboutMe: true,
    showPortfolio: false,
    showResume: false,
    showContact: false,
  };

  showAboutMeHandler = () => {
    this.setState({
      ...this.state,
      showAboutMe: true,
      showPortfolio: false,
      showResume: false,
      showContact: false,
    });
  };
  showPortfolioHandler = () => {
    this.setState({
      ...this.state,
      showAboutMe: false,
      showPortfolio: true,
      showResume: false,
      showContact: false,
    });
  };
  showResumeHandler = () => {
    this.setState({
      ...this.state,
      showAboutMe: false,
      showPortfolio: false,
      showResume: true,
      showContact: false,
    });
  };
  showContactHandler = () => {
    this.setState({
      ...this.state,
      showAboutMe: false,
      showPortfolio: false,
      showResume: false,
      showContact: true,
    });
  };

  render() {
    const { showAboutMe, showContact, showPortfolio, showResume } = this.state;

    return (
      <>
        <Header />
        <div>
          {(showAboutMe) && <AboutMe />}
          {(showContact) && <Contact />}
          {(showPortfolio) && <Porfolio />}
          {(showResume) && <Resume />}
        </div>
      </>
    );
  }
}

export default App;
