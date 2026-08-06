import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adults: 1,
  kids: 0,
};

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {
    setGuests(state, action) {
      state.adults = action.payload.adults;
      state.kids = action.payload.kids;
    },

    clearGuests(state) {
      state.adults = "";
      state.kids = "";
    },
  },
});

export const { setGuests, clearGuests } = guestSlice.actions;
export default guestSlice.reducer;
