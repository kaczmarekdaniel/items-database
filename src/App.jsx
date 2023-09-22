import { useState } from "react";
import { light } from "./themes/light";
import { ThemeProvider } from "styled-components";
import { MainWrapper, ContentWrapper } from "./App.styles";

// libs
import { Provider } from "react-redux";
import { store } from "./store/store";

//components

import Router from "./router/Router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <MainWrapper>
          <ContentWrapper>
            <Router />
          </ContentWrapper>
        </MainWrapper>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
