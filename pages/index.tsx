import React from "react";

import { Wrapper, Header, Main, Footer, Cards, Calendar, MainWrapper, Todos } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <MainWrapper>
        <Calendar />
        <Todos />
      </MainWrapper>
      <Footer />
    </Wrapper>
  );
};
export default Home;
