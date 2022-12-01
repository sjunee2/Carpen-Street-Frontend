import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
