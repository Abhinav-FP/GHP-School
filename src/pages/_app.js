import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (

    <>
    <Head>
        <link rel="icon" href="/favicon.png" />
        <title>BVBS School</title>
      </Head>
      <Toaster
        toastOptions={{
          position: "top-right",
          className: "",
          style: {
            "font-size": "14px",
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
