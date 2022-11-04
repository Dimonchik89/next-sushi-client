import '../styles/reset.scss';
import '../styles/index.scss';
import '../styles/globals.css';
import '../styles/helper.scss';
import '../styles/button.scss';
import '../styles/about.scss';
import '../styles/card.scss';
import '../styles/carousel.scss';
import '../styles/cart.scss';
import '../styles/feedback.scss';
import '../styles/footer.scss';
import '../styles/login.scss';
import '../styles/menu.scss';
import '../styles/new.scss';
import '../styles/preview.scss';
import '../styles/review.scss';
import '../styles/special.scss';
import '../styles/workTime.scss';
import '../styles/item.scss';
import { Provider } from 'react-redux';
import store from "../store/store"
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 320,
        md: 600,
        lg: 835,
        xl: 1473,
      }
    }
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
