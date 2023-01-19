import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    font-family: 'DM Sans', sans-serif;
    list-style: none;
  }
  html, body {
    background: var(--light-gray);
    height: 100vh;
  }
  :root {
    --brand-blue: #0A4378;
    --brand-blue-light: #1971C2;
    --brand-blue-light-02: #D0EBFF;
    --brand-blue-light-03: #F0F9FF;
    --gray-headline: #061800;
    --gray-paragraph: #495057;
    --light-gray: #F9F9F9; 
    --white: #FFFFFF;
  }
`;