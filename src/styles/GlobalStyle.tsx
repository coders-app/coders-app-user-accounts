import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
}

body {
  font-size: 1.125rem;
  margin: 0;
}

ul, li {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

button {
  padding: 0;
  cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
}

p {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-family: "Montserrat", sans-serif;
}

a, a:visited {
  color: ${(props) => props.theme.colors.brands.base};
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
`;

export default GlobalStyle;
