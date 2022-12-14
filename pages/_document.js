import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import theme from "../config/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.dark} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* open graphs start */}
          <meta property="og:site_name" content="AssetMantle" />
          <meta property="og:url" content="https://assetmantle.one" />
          <meta property="al:web:url" content="https://assetmantle.one" />
          <meta property="og:image" content="/og.png" />
          <meta property="og:title" content="AssetMantle" />
          <meta
            property="og:description"
            content="AssetMantle is a community-first platform for NFT creators and collectors. Use AssetMantle to create your own NFT store or to expand your collection of NFTs."
          />
          {/* open graphs end */}
        </Head>
        <body
          style={{
            // backgroundImage: "url('/images/Background_tile.webp')", //  to remove christmas styles uncomment this line
            backgroundRepeat: "repeat-y",
            // backgroundPosition: "center top",
            backgroundSize: "100%",
            backgroundColor: theme.palette.background.default,
            // backgroundColor: "#620D06", // to remove christmas styles remove this line
            backgroundImage: "linear-gradient(to right,#550D05,#620D06,#461009)",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
