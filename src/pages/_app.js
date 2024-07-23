import MainLayout from "@/components/layout/MainLayout";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Router from "next/router";
import { useState, useEffect } from "react";

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
        <LoadingSpinner isLoading={isLoading} />
      </MainLayout>
    </ThemeProvider>
  );
}
