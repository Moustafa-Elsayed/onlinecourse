import MainLayout from "@/components/layout/MainLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Router from "next/router";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store"; // Adjust the path as needed
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);

  const getLayout = Component.noLayout
    ? (page) => page
    : (page) => <MainLayout>{page}</MainLayout>;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Head>
            <title>skillbridge</title>
            <meta name="description" content="A brief description of the site" />
          </Head>
          {getLayout(
            <>
              <Component {...pageProps} />
              <ToastContainer />
              <LoadingSpinner isLoading={isLoading} />
            </>
          )}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
