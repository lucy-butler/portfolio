import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --background-dark-color: #10121A;
  --sidebar-dark-color: #191D2B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background-dark-color);
}
`;

export default GlobalStyle;