import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkIn: "",
  checkOut: "",
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setBookingDates(state, action) {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },

    clearDate(state) {
      ((state.checkIn = ""), (state.checkOut = ""));
    },
  },
});

export const { setBookingDates, clearDate } = dateSlice.actions;
export default dateSlice.reducer;
