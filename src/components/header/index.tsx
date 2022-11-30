import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@redux/store";
import { RootState } from "@redux/reducers";
import { Logo, Toggle } from "@components";
import { Wrapper, Container, MonthWrapper, YearWrapper } from "./styled";
import { Button } from "@components";
import { changeMonth, changeYear } from "@redux/actions";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const date = useSelector((state: RootState) => state.date);
  const stringMonthList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

  const handleNextMonth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const newDate = new Date(date.year, date.month + 1);
    dispatch(changeYear(newDate.getFullYear()));
    dispatch(changeMonth(newDate.getMonth()));
  };

  const handlePreviousMonth = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const newDate = new Date(date.year, date.month - 1);
    dispatch(changeYear(newDate.getFullYear()));
    dispatch(changeMonth(newDate.getMonth()));
  };

  return (
    <Wrapper>
      <Container>
        <YearWrapper>
          {date.year}
        </YearWrapper>
        
        <MonthWrapper>
          <Button onClick={(e) => handlePreviousMonth(e) }>
            <AiFillCaretLeft />
          </Button>
          {stringMonthList[date.month]}
          <Button onClick={(e) => handleNextMonth(e) }>
            <AiFillCaretRight />
          </Button>
        </MonthWrapper>
        
      </Container>
    </Wrapper>
  );
};
