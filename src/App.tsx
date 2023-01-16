import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { darkTheme } from './styles/themes/darkTheme'

export function App() {
  return (
    <ThemeProvider
      theme={
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
          ? defaultTheme
          : darkTheme
      }
    >
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
