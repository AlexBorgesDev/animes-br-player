import React from 'react'
import reactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'

import Routes from './routes'

import theme from './theme'

import 'plyr/dist/plyr.css'

document.title = 'Animes-BR Player'

window.onload = () => {
  const mainElement = document.createElement('div')
  mainElement.setAttribute('id', 'root')
  document.body.appendChild(mainElement)

  reactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </React.StrictMode>,
    mainElement
  )
}
