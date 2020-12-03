import { I18nextProvider } from "react-i18next";
import Styles from "../globalStyles";
import i18n from "../translation";

import Footer from "../components/Footer";
import Header from "../components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Styles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </I18nextProvider>
  );
}

export default MyApp;
