import { useAppDispatch } from "@redux/store";
import { useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import React, { ReactNode } from "react";
import { DayWrapper, TodoInCalendar } from "./styled";
import { changeMonth, changeYear, changeDay } from "@redux/actions";

export const Day = ({ day, month, isCurrent, isCurrentMonth } : { day: number, month : string, isCurrent: Boolean, isCurrentMonth: Boolean }) => {
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
  
  const changeDate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    if (month === "prev") {
      const newDate = new Date(currentNumberedDate.year, currentNumberedDate.month - 1);
      dispatch(changeYear(newDate.getFullYear()));
      dispatch(changeMonth(newDate.getMonth()));
      dispatch(changeDay(day));
    } else if (month === "cur") {
      const newDate = new Date(currentNumberedDate.year, currentNumberedDate.month);
      dispatch(changeYear(newDate.getFullYear()));
      dispatch(changeMonth(newDate.getMonth()));
      dispatch(changeDay(day));
    } else if (month === "next") {
      const newDate = new Date(currentNumberedDate.year, currentNumberedDate.month + 1);
      dispatch(changeYear(newDate.getFullYear()));
      dispatch(changeMonth(newDate.getMonth()));
      dispatch(changeDay(day));
    } else {
      return null;
    }
  }

  const todosForDay = todos.filter((todo) => (filterCallback(todo)))

  return(
    <DayWrapper onClick={(e) => changeDate(e)} isCurrent={isCurrent} isCurrentMonth={isCurrentMonth}>
      {day}
      {todosForDay.map((todo) => (
        <TodoInCalendar key={todo.id}>{todo.date.getHours()}:{(todo.date.getMinutes()<10?'0':'') + todo.date.getMinutes() + " "}{todo.text}</TodoInCalendar>
      ))}
    </DayWrapper>
  )
};