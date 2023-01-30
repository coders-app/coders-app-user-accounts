import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0 auto;
}

ul,li {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

button {
  padding: 0;
}


button, a {
  cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
span,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
