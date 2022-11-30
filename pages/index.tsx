import React from "react";

import { Wrapper, Header, Main, Footer, Cards, Calendar } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Calendar />
      <Main />
      <Footer />
    </Wrapper>
  );
};
export default Home;
