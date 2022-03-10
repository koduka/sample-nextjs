import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {

  let theme = createTheme();

  theme = createTheme({
    typography: {
      fontSize: 10,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider >
  )
}

export default App
