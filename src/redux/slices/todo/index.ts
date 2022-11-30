import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo{
  id: number;
  text: string;
  date: Date;
  completed: boolean;
}

interface AddTodo{
  text: string;
  date: Date;
}

const initialState = {
  todos: [] as Todo[],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodo>) => {
      const todo = {
        id: Math.random(),
        text: action.payload.text,
        date: action.payload.date,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].completed = !state.todos[index].completed;
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      state.todos[index].text = action.payload.text;
      state.todos[index].date = action.payload.date;
    }
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
