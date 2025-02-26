import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteObject: 1,
};

const favotireSlice = createSlice({
  name: "favoriteComponent",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteObject += action.payload;
    },
  },
});

export default favotireSlice.reducer;
export const { addFavorite } = favotireSlice.actions;
