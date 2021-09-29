import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import { Route, Switch } from "react-router";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import PortfoiloPage from "./Page/PortfoiloPage";
import ContactPage from "./Page/ContactPage";
import ExperiencePage from "./Page/ExperiencePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
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
          <Route path="/portfoilo" exact>
            <PortfoiloPage />
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
  margin-left: 16.3rem;
  min-height: 100vh;
`;

export default App;
