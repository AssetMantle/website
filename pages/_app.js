import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../components/layout";
import theme from "../config/theme";
import { useEffect } from "react";
import * as gtag from "../lib";
import { useRouter } from "next/router";
import Script from "next/script";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-5FCP59P8T5");
    console.log(dataLayer);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="AssetMantle is a community-first platform for NFT creators and collectors. Use AssetMantle to create your own NFT store or to expand your collection of NFTs."
        />
        <title>AssetMantle</title>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5FCP59P8T5"
      ></Script>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
