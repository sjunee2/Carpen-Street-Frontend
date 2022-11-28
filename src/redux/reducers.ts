import { combineReducers } from 'redux';

import date from "@redux/slices/date";

import todos from "@redux/slices/todo";

const rootReducer = combineReducers({ date , todos });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
