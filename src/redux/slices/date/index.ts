import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Date{
  year: number;
  month: number;
  day: number;
}

const currentDate = new Date();

const initialState: Date = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1,
  day: currentDate.getDate(),
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDay: (state, action: PayloadAction<number>) => {
      state.day = action.payload;
    },
    changeMonth: (state, action: PayloadAction<number>) => {
      state.month = action.payload;
    },
    changeYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    }
  },
});

export const { changeDay, changeMonth, changeYear } = dateSlice.actions;
export default dateSlice.reducer;
