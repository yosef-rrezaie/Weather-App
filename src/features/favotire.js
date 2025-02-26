import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteObject: [],
};

const favotireSlice = createSlice({
  name: "favoriteComponent",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteObject.push(action.payload);
    },
  },
});

export default favotireSlice.reducer;
export const { addFavorite } = favotireSlice.actions;
