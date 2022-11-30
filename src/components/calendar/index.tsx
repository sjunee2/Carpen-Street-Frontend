import { useAppDispatch } from "@redux/store";
import React from "react";
import { Container } from "@components/header/styled";
import { Day } from "@components/day";
import { Header } from "@components/header";
import { DaysOfTheWeek } from "./daysoftheweek";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";


export const Calendar: React.FC = () => {
  const date = useSelector((state: RootState) => state.date);
  const firstDayOfMonth = new Date(date.year, date.month, 1);
  const lastDayOfMonth = new Date(date.year, date.month + 1, 0);
  const previousMonthLastDay = new Date(date.year, date.month, 0);

  const renderPreviousMonth = () => {
    const result = [];
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      result.unshift(
        <Day day={previousMonthLastDay.getDate() - i} month="prev" />
      )
    }
    return result;
  };

  const renderCurrentMonth = () => {
    const result = [];
    for (let i = 0; i < lastDayOfMonth.getDate(); i++) {
      result.push(
        <Day day={i + 1} month="cur" />
      )
    }
    return result;
  };

  const renderNextMonth = () => {
    const result = []
    for (let i = 0; i < 6 - lastDayOfMonth.getDay(); i++) {
      result.push(
        <Day day={i + 1} month="next" />
      )
    }
    return result;
  };
  

  return(
    <Container>
      <Header />
      <DaysOfTheWeek />
      {renderPreviousMonth()}
      {renderCurrentMonth()}
      {renderNextMonth()}
    </Container>
  )
};