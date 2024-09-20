import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (

    <>
      <Toaster
        toastOptions={{
          position: "top-right",
          className: "",
          style: {
            "font-size": "14px",
          },
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}
