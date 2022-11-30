import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NumberedDate{
  year: number;
  month: number;
  day: number;
}

const currentDate = new Date();

const initialState: NumberedDate = {
  year: currentDate.getFullYear(),
  month: currentDate.getMonth(),
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
export type { NumberedDate };