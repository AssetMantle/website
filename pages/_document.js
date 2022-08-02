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
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ backgroundColor: theme.palette.primary.dark }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
