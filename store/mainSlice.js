import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    users: [],
    backdrop: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    changeUser: (state, action) => {
      state.users.every((el, index) => {
        if (el.id === action.payload.id) {
          state.users[index] = action.payload;
          return false;
        }
        return true;
      });
    },
    deleteUser: (state, action) => {
      state.users.every((el, index) => {
        if (el.id === action.payload.id) {
          state.users.splice(index, 1);
          return false;
        }
        return true;
      });
    },
    setBackdrop: (state) => {
      state.backdrop = !state.backdrop;
    },
  },
});

export const { setUsers, addUser, changeUser, deleteUser, setBackdrop } =
  mainSlice.actions;
export default mainSlice.reducer;
