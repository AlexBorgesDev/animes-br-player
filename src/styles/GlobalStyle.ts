import { createGlobalStyle } from 'styled-components'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const PlyrCSS = require('plyr/dist/plyr.css')

// const plyrCSS = css(PlyrCSS)

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${require('../fonts/Poppins-Regular.ttf')});
    font-weight: 400;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require('../fonts/Poppins-Medium.ttf')});
    font-weight: 500;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require('../fonts/Poppins-SemiBold.ttf')});
    font-weight: 600;
  }

  @font-face {
    font-family: Poppins;
    src: url(${require('../fonts/Poppins-Bold.ttf')});
    font-weight: 700;
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
    color: ${props => props.theme.color};
    background: ${props => props.theme.bodyBackground};
  }
`
