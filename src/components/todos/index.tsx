import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, removeTodo, completeTodo, editTodo } from "@redux/actions";
import { RootState } from "@redux/reducers";
import { useAppDispatch } from "@redux/store";
import { Button } from "@components";
import { Editor, EditorInput } from "./styled";

export const Todos: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const currentNumberedDate = useSelector((state: RootState) => state.date);

  const [showEdit, setShowEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [editTime, setEditTime] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [addText, setAddText] = useState("");
  const [addTime, setAddTime] = useState("");
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date(currentNumberedDate.year, currentNumberedDate.month, currentNumberedDate.day);
  
  const timeToDate = (time: string) => {
    const [hours, minutes] = time.split(":");
    return new Date(currentNumberedDate.year, currentNumberedDate.month, currentNumberedDate.day, parseInt(hours), parseInt(minutes));
  }
  
  const renderTodos = () => {
    return todos.map((todo, index) => {

      const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(editTodo({
          id: todo.id,
          text: editText,
          date: timeToDate(editTime)
        }));
        setShowEdit(false);
      }
      if (todo.date.getFullYear() === currentDate.getFullYear() && todo.date.getMonth() === currentDate.getMonth() && todo.date.getDate() === currentDate.getDate() && todo.completed === false) {
        return (
          <div key={index}>
            <span>
              {todo.date.getHours()}:{(todo.date.getMinutes()<10?'0':'') + todo.date.getMinutes()}
            </span>
            <span>
              {todo.text}
            </span>
            <Button onClick={() => (setShowEdit(true))}>Edit</Button>
            {showEdit &&
              <div>
                <Editor onSubmit={handleEditSubmit}>
                  <EditorInput id = "time" type="time" onChange={(e) => {setEditTime(e.target.value)}}></EditorInput>
                  <EditorInput id = "text" type="text" onChange={(e) => {setEditText(e.target.value)}}></EditorInput>
                  <Button type="submit">Submit</Button>
                  <Button onClick={() => (setShowEdit(false))}>Cancel</Button>
                </Editor>
                
              </div>
            }
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

  const handleAddSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addTodo({
      text: addText,
      date: timeToDate(addTime)
    }));
    setShowAdd(false);
  }

  const renderAdd = () => {
    return(
      <div>
        <Button onClick={() => (setShowAdd(true))}>Add</Button>
        {showAdd &&
          <div>
            <Editor onSubmit={handleAddSubmit}>
              <EditorInput id = "time" type="time" onChange={(e) => {setAddTime(e.target.value)}}></EditorInput>
              <EditorInput id = "text" type="text" onChange={(e) => {setAddText(e.target.value)}}></EditorInput>
              <Button type="submit">Submit</Button>
              <Button onClick={() => (setShowAdd(false))}>Cancel</Button>
            </Editor>
            
          </div>
        }
      </div>
    )
  }

    


  return (
    <div>
      <h1>Todos until {daysOfWeek[currentDate.getDay()]} {currentNumberedDate.day}</h1>
      {renderTodos()}
      {renderAdd()}
    </div>
  );
};