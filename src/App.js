import React from 'react';
import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import PortfolioPage from "./Page/PortfolioPage";
import ContactPage from "./Page/ContactPage";
import ExperiencePage from "./Page/ExperiencePage";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />
      <div className="side-button">
        <IconButton onClick={ () => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>
      <MainContentStyle>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/experience" exact>
            <ExperiencePage />
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </Switch>
      </MainContentStyle>
      
    </div>
  );
}

const MainContentStyle = styled.main`
  position: relative;
  margin-left: 16rem;
  min-height: 100vh;
  @media screen and (max-width:1200px) {
    margin-left: 0;
  }
`;

export default App;
