import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  name: "",
  username: "",
  email: "",
};

// User slice
const userSlice = createSlice({
  // Nombre del slice
  name: "user",
  initialState,
  // Reducers
  reducers: {
    addUser: (state, action) => {
      // Destructuring del payload (data que llega al reducer)
      const { name, username, email } = action.payload;
      // Actualizar el estado (Con redux toolkit, podemos "mutar" el estado)
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Exportar las acciones (Estas son creadas por redux toolkit)
export const { addUser, changeEmail } = userSlice.actions;

// Exportar el reducer
export default userSlice.reducer;
