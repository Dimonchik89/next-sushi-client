import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../styles/reset.scss";
import "../styles/index.scss";
import "../styles/globals.css";
import "../styles/helper.scss";
import "../styles/button.scss";
import "../styles/about.scss";
import "../styles/card.scss";
import "../styles/carousel.scss";
import "../styles/cart.scss";
import "../styles/feedback.scss";
import "../styles/footer.scss";
import "../styles/login.scss";
import "../styles/menu.scss";
import "../styles/new.scss";
import "../styles/preview.scss";
import "../styles/review.scss";
import "../styles/special.scss";
import "../styles/workTime.scss";
import "../styles/item.scss";

const publicVapidKey =
  "BJlPTPnoI4EYanuVyKh6bcWXFOdvLJTbO819-lMsIY-j5m9igc2WxxhNPayvqMZRcPHXAyG8Xt6lotEgaMrO9_U";

async function send() {
  const register = await navigator.serviceWorker.register("/sw.js");

  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
  console.log("fetch=======", `${process.env.NEXT_PUBLIC_BASE_URL}subscribe`);
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}subscribe`, {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("fetched======");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 320,
        md: 600,
        lg: 835,
        xl: 1473,
      },
    },
  });

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      send().catch((e) => console.error(e));
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
