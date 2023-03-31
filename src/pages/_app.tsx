import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/context/redux";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
