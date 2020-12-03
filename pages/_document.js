import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="google-site-verification"
            content="tm_TmmBApuicEwDgptQiVGpQTHxCsHcsvK8K500Mmew"
          />
          <meta
            name="description"
            content="Explore the dataset in an interactive map. This dataset measures food availability and access for 76 low- and middle-income countries. The dataset includes annual country-level data on area, yield, production, nonfood use, trade, and consumption for grains and root and tuber crops (combined as R&T in the documentation tables), food aid, total value of imports and exports, gross domestic product, and population compiled from a variety of sources."
          />
          <link
            rel="apple-touch-icon"
            href="%PUBLIC_URL%/img/icons/logo192.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
