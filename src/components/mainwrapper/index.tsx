import React from "react";
import { Container } from "./styled";

export const MainWrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};