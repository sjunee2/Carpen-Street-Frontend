import { useAppDispatch } from "@redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import React, { ReactNode } from "react";
import { Container } from "@components/header/styled";


export const Day: React.FC = ({ day, month } : { day: number, month : string }) => {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentNumberedDate = useSelector((state: RootState) => state.date);
  const filterCallback = (todo: any) => {
    if (month === "prev") {
      const previousDate = new Date(currentNumberedDate.year, currentNumberedDate.month - 1, day);
      return ( 
        todo.date.getFullYear() === previousDate.getFullYear() && 
        todo.date.getMonth() === previousDate.getMonth() && 
        todo.date.getDate() === previousDate.getDate()
      )
    } else if (month === "cur") {
      const currentDate = new Date(currentNumberedDate.year, currentNumberedDate.month, day);
      return (
        todo.date.getFullYear() === currentDate.getFullYear() &&
        todo.date.getMonth() === currentDate.getMonth() &&
        todo.date.getDate() === currentDate.getDate()
      )
    } else if (month === "next") {
      const nextDate = new Date(currentNumberedDate.year, currentNumberedDate.month + 1, day);
      return (
        todo.date.getFullYear() === nextDate.getFullYear() &&
        todo.date.getMonth() === nextDate.getMonth() &&
        todo.date.getDate() === nextDate.getDate()
      )
    } else {
      return null;
    }
  }

  const todosForDay = todos.filter((todo) => (filterCallback(todo)))

  return(
    <Container>
      <div>
        {day}
      </div>
    </Container>
  )
};