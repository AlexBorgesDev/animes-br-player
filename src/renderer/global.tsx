import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${require("./fonts/Poppins-Regular.ttf")});
    font-weight: 400;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require("./fonts/Poppins-Medium.ttf")});
    font-weight: 500;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require("./fonts/Poppins-SemiBold.ttf")});
    font-weight: 600;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require("./fonts/Poppins-Bold.ttf")});
    font-weight: 700;
  }

  :root {
    --color: #fff;
    --body-background: #282a36;
    --input-background: #6d7082;
    --background-in-primary: #424865;
    --background-in-primary-list-search: #2b2f42;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    font: 400 1.5rem/1.5 Poppins, sans-serif;
    color: ${(props) => props.theme.color};
    background: ${(props) => props.theme.bodyBackground};
  }
`;

export default GlobalStyle;
