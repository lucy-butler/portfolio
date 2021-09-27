import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyle>
        <HomePage />
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
