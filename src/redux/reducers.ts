import { combineReducers } from 'redux';

import counter from "@redux/slices/counter";

import todos from "@redux/slices/todo";

const rootReducer = combineReducers({ counter, todos });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
