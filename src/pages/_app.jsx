import "./style.css";

import Provider from "../Redux/Provider";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <UserProvider>
          <Provider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Provider>
        </UserProvider>
      </SessionProvider>
      ;
    </>
  );
}

export default MyApp;
