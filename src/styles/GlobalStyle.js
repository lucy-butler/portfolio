import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --background-dark-color: #10121A;
  --background-darkgrey-color: #191D2B;
  --sidebar-dark-color: #191D2B;
  --border-color: #2E344E;
  --font-light--color: #a4acc4;
  --primary-color: #007bff;
  --white-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1.1rem;
  font-family: 'Nunito', sans-serif;
}

body {
  background-color: var(--background-dark-color);
  color: var(--font-light--color);
}

li, ol, ul {
  list-style: none;
}

a {
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.2rem;
}

h1 {
  font-size: 4rem;
  color: var(--white-color);
  span {
  font-size: 4rem;
  color: var(--primary-color);
  }
}


`;

export default GlobalStyle;