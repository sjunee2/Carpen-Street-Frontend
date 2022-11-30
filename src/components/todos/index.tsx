import React from "react";
import { useSelector } from "react-redux";

import { addTodo, removeTodo, completeTodo } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";
import { Button } from "@components";

export const Todos: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentNumberedDate = useSelector((state: RootState) => state.date);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date(currentNumberedDate.year, currentNumberedDate.month, currentNumberedDate.day);
  
  
  const renderTodos = () => {
    return todos.map((todo, index) => {
      if (todo.date.getFullYear() === currentDate.getFullYear() && todo.date.getMonth() === currentDate.getMonth() && todo.date.getDate() === currentDate.getDate()) {
        return (
          <div key={index}>
            <span>
              {todo.date.getHours()}:{(todo.date.getMinutes()<10?'0':'') + todo.date.getMinutes()}
            </span>
            <span>
              {todo.text}
            </span>
            <Button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </Button>
            <Button onClick={() => dispatch(completeTodo(todo.id))}>
              Complete
            </Button>
          </div>
        )
      } else {
        return null;
      }
    })
  }


  return (
    <div>
      <h1>Todos until {daysOfWeek[currentDate.getDay()]} {currentNumberedDate.day}</h1>
      {renderTodos()}
      <Button onClick={() => dispatch(addTodo({text: "추가함", date: new Date()}))}>
        ADD
      </Button>
    </div>
  );
};