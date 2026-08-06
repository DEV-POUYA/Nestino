import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import dateReducer from "./features/dateSlice";
import guestReducer from "./features/guestSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    date: dateReducer,
    guests: guestReducer,
  },
});
