import { ThemeProvider, useTheme, responsiveFontSizes, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const theme = responsiveFontSizes(createTheme())

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
