import { configureStore } from "@reduxjs/toolkit";

// Reducers
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
